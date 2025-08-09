# SecuMint Smart Contracts

This directory contains the Clarity smart contracts for the SecuMint platform.

## Contract Architecture

### Core Contracts

1. **secumint-securities.clar** - Main securities issuance and registry contract
   - Token minting and burning
   - Ownership tracking
   - Metadata management
   - Compliance checks

2. **secumint-custody.clar** - Custodian services and multi-sig wallet management
   - Multi-signature wallet creation
   - Asset custody and transfer controls
   - Institutional custody features

3. **secumint-trading.clar** - Secondary market trading functionality
   - Order book management
   - Trade execution
   - Settlement mechanisms
   - DvP (Delivery-versus-Payment) implementation

4. **secumint-governance.clar** - Corporate actions and governance
   - Voting mechanisms
   - Proposal management
   - Shareholder rights

5. **secumint-dividends.clar** - Automated dividend distribution
   - Dividend calculation and distribution
   - Stablecoin integration (USDA)
   - Payment scheduling

### Test Contracts

- **test-usda.clar** - Mock USDA stablecoin for testing
- **test-helpers.clar** - Utility functions for testing

## Development Workflow

### Prerequisites

```bash
# Install Clarinet
curl --proto '=https' --tlsv1.2 -sSf https://sh.clarinet.xyz | sh

# Verify installation
clarinet --version
```

### Contract Development

```bash
# Check contract syntax
clarinet check

# Run contract tests
clarinet test

# Start local devnet
clarinet devnet start

# Deploy contracts to devnet
clarinet deploy --devnet
```

### Testing

```bash
# Run all tests
clarinet test

# Run specific test file
clarinet test tests/secumint-securities_test.ts

# Generate test coverage
clarinet test --coverage
```

## Contract Specifications

### Securities Token Standard

The securities contracts implement a custom token standard that extends SIP-010 with:
- Compliance checks for transfers
- Investor accreditation verification
- Jurisdictional restrictions
- Corporate action support

### Custody Features

- Multi-signature wallet support
- Time-locked transfers
- Emergency recovery mechanisms
- Institutional custody compliance

### Trading Mechanisms

- Order matching engine
- Atomic swaps with USDA
- Settlement finality
- Trade reporting

### Governance Integration

- Token-weighted voting
- Proposal lifecycle management
- Quorum requirements
- Execution mechanisms

## Security Considerations

- All contracts undergo comprehensive testing
- Third-party security audits required before mainnet deployment
- Emergency pause mechanisms implemented
- Access control and role-based permissions

## Deployment

### Devnet Deployment

```bash
clarinet deploy --devnet
```

### Testnet Deployment

```bash
clarinet deploy --testnet
```

### Mainnet Deployment

```bash
# Requires additional security checks and approvals
clarinet deploy --mainnet
```

## Integration

These contracts are designed to integrate with:
- Frontend applications via Stacks.js
- Backend services for off-chain data
- External oracles for price feeds
- KYC/AML compliance services

## Documentation

Detailed contract documentation and API references are available in the `/docs` directory.