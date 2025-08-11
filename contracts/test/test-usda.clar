;; Minimal SIP-010-like token for testing
(define-trait sip10-trait
  ((transfer (uint principal principal (optional (buff 34))) (response bool uint))
   (balance-of (principal) (response uint uint))
   (get-decimals () (response uint uint))
   (get-symbol () (response (string-utf8 32) uint))
   (get-name () (response (string-utf8 32) uint))))

(define-constant DECIMALS u6)
(define-constant NAME "Test USDA")
(define-constant SYMBOL "tUSDA")

(define-map balances { owner: principal } { amount: uint })

(define-read-only (get-name) (ok NAME))
(define-read-only (get-symbol) (ok SYMBOL))
(define-read-only (get-decimals) (ok DECIMALS))

(define-read-only (balance-of (who principal))
  (ok (default-to u0 (get amount (map-get? balances { owner: who })))))

;; mint to caller (test helper)
(define-public (mint (amount uint))
  (begin
    (asserts! (> amount u0) (err u1))
    (let (
      (cur (default-to u0 (get amount (map-get? balances { owner: tx-sender }))))
      (new (+ cur amount))
    )
      (map-set balances { owner: tx-sender } { amount: new })
      (ok true)
    )
  )
)

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (> amount u0) (err u2))
    (let ((from-bal (default-to u0 (get amount (map-get? balances { owner: sender })))) )
      (asserts! (>= from-bal amount) (err u3))
      (map-set balances { owner: sender } { amount: (- from-bal amount) })
      (let ((to-bal (default-to u0 (get amount (map-get? balances { owner: recipient })))) )
        (map-set balances { owner: recipient } { amount: (+ to-bal amount) })
        (ok true)
      )
    )
  )
)
