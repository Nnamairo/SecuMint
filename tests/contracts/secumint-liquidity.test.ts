import { describe, it, expect } from 'vitest';
import { Cl, ClarityType } from '@stacks/transactions';
import { tx } from '@hirosystems/clarinet-sdk';
// provided by vitest-environment-clarinet setup
declare const simnet: import('@hirosystems/clarinet-sdk').Simnet;

describe('secumint-liquidity', () => {
  it('deposit/withdraw updates shares and moves tokens', async () => {
    // addresses from settings/Devnet.toml
    const wallet1 = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';

    // Mint test USDA to wallet_1
    let block = await simnet.mineBlock([
      tx.callPublicFn("test-usda", "mint", [Cl.uint(1000)], wallet1),
    ]);
  expect(block[0].result.type).toBe(ClarityType.ResponseOk);

    // Deposit 600
    block = await simnet.mineBlock([
      tx.callPublicFn("secumint-liquidity", "deposit", [Cl.uint(600)], wallet1),
    ]);
  expect(block[0].result.type).toBe(ClarityType.ResponseOk);

    // Check internal share balance
  let call = await simnet.callReadOnlyFn("secumint-liquidity", "get-balance", [Cl.principal(wallet1)], wallet1);
  expect(Cl.prettyPrint(call.result)).toBe(Cl.prettyPrint(Cl.uint(600)));

    // Token balances: wallet1 = 400, contract = 600
  call = await simnet.callReadOnlyFn("test-usda", "balance-of", [Cl.principal(wallet1)], wallet1);
  expect(Cl.prettyPrint(call.result)).toBe(Cl.prettyPrint(Cl.ok(Cl.uint(400))));

    // Withdraw 250
    block = await simnet.mineBlock([
      tx.callPublicFn("secumint-liquidity", "withdraw", [Cl.uint(250)], wallet1),
    ]);
  expect(block[0].result.type).toBe(ClarityType.ResponseOk);

    // Shares: 350
  call = await simnet.callReadOnlyFn("secumint-liquidity", "get-balance", [Cl.principal(wallet1)], wallet1);
  expect(Cl.prettyPrint(call.result)).toBe(Cl.prettyPrint(Cl.uint(350)));

    // Token balances: wallet1 = 650, contract = 350
  call = await simnet.callReadOnlyFn("test-usda", "balance-of", [Cl.principal(wallet1)], wallet1);
  expect(Cl.prettyPrint(call.result)).toBe(Cl.prettyPrint(Cl.ok(Cl.uint(650))));
  });
});
