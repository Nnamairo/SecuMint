;; SecuMint Liquidity Contract
;; Provides simple deposit/withdraw of a SIP-010 fungible token (e.g., USDA)
;; Users deposit tokens to receive a 1:1 internal share balance, and can withdraw anytime.

;; Error codes
(define-constant ERR-UNAUTHORIZED (err u100))
(define-constant ERR-INVALID-AMOUNT (err u101))
(define-constant ERR-INSUFFICIENT-BALANCE (err u102))

;; SIP-010 trait (minimal subset)
(define-trait sip10-trait
  ((transfer (uint principal principal (optional (buff 34))) (response bool uint))
   (balance-of (principal) (response uint uint))
   (get-decimals () (response uint uint))
   (get-symbol () (response (string-utf8 32) uint))
   (get-name () (response (string-utf8 32) uint))))

;; The underlying token this pool accepts (e.g., .test-usda)
(define-constant TOKEN .test-usda)

;; Storage: simple share balances per user (1:1 with token units)
(define-map balances
  { user: principal }
  { balance: uint })

;; Read-only: get a user's balance
(define-read-only (get-balance (user principal))
  (default-to u0 (get balance (map-get? balances { user: user }))))

;; Internal helper: returns this contract principal
(define-read-only (contract-principal)
  (as-contract tx-sender))

;; Deposit tokens into the pool.
;; Transfers `amount` tokens from the caller to this contract, then credits shares.
(define-public (deposit (amount uint))
  (begin
    (asserts! (> amount u0) ERR-INVALID-AMOUNT)
    (let (
      (recipient (as-contract tx-sender))
      (res (contract-call? TOKEN transfer amount tx-sender recipient none))
    )
      (match res
        ok-val
          (let (
            (current (default-to u0 (get balance (map-get? balances { user: tx-sender }))))
            (new (+ current amount))
          )
            (map-set balances { user: tx-sender } { balance: new })
            (ok ok-val)
          )
        err-code
          (err err-code)
      )
    )
  )
)

;; Withdraw tokens from the pool.
;; Deducts shares, then transfers tokens back to the caller from the contract.
(define-public (withdraw (amount uint))
  (begin
    (asserts! (> amount u0) ERR-INVALID-AMOUNT)
    (let (
      (caller tx-sender)
      (bal (default-to u0 (get balance (map-get? balances { user: tx-sender }))))
    )
      (asserts! (>= bal amount) ERR-INSUFFICIENT-BALANCE)
      (map-set balances { user: caller } { balance: (- bal amount) })
      (as-contract
        (let (
          (sender tx-sender)
          (res (contract-call? TOKEN transfer amount sender caller none))
        )
          (match res
            ok-val (ok ok-val)
            err-code (err err-code)
          )
        )
      )
    )
  )
)
