import { Clarinet, Tx, Chain, Account, types } from "@hirosystems/clarinet-sdk";

Clarinet.test({
  name: "deposit mints shares and moves USDA to contract; withdraw returns USDA and burns shares",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet1 = accounts.get("wallet_1")!;

    // Mint test USDA to wallet_1
    let block = chain.mineBlock([
      Tx.contractCall("test-usda", "mint", [types.uint(1000)], wallet1.address),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);

    // Deposit 600
    block = chain.mineBlock([
      Tx.contractCall("secumint-liquidity", "deposit", [types.uint(600)], wallet1.address),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);

    // Check internal share balance
    let call = chain.callReadOnlyFn("secumint-liquidity", "get-balance", [types.principal(wallet1.address)], wallet1.address);
    call.result.expectUint(600);

  // Check token balances: wallet1 = 400, contract = 600
  const deployer = accounts.get("deployer")!;
    call = chain.callReadOnlyFn("test-usda", "balance-of", [types.principal(wallet1.address)], wallet1.address);
    call.result.expectOk().expectUint(400);
  call = chain.callReadOnlyFn("test-usda", "balance-of", [types.principal(`${deployer.address}.secumint-liquidity`)], wallet1.address);
    call.result.expectOk().expectUint(600);

    // Withdraw 250
    block = chain.mineBlock([
      Tx.contractCall("secumint-liquidity", "withdraw", [types.uint(250)], wallet1.address),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);

    // Shares: 350
    call = chain.callReadOnlyFn("secumint-liquidity", "get-balance", [types.principal(wallet1.address)], wallet1.address);
    call.result.expectUint(350);

  // Token balances: wallet1 = 650, contract = 350
    call = chain.callReadOnlyFn("test-usda", "balance-of", [types.principal(wallet1.address)], wallet1.address);
    call.result.expectOk().expectUint(650);
  call = chain.callReadOnlyFn("test-usda", "balance-of", [types.principal(`${deployer.address}.secumint-liquidity`)], wallet1.address);
    call.result.expectOk().expectUint(350);
  }
});
