# SecuMint

A blockchain-powered platform for the issuance, registration, and custodian-grade holding of tokenized securities, built on the Stacks blockchain and operating under the DLT Pilot Regime.

## Executive Summary

SecuMint integrates the entire securities lifecycle — from issuance and registry to trading and settlement — into a unified secondary market infrastructure. The platform serves as both a regulated securities registrar and secondary market, enabling Delivery-versus-Payment (DvP), automated dividend distribution, and full compliance with securities regulations.

### Key Capabilities

- **End-to-End Securities Lifecycle**: Complete integration from issuance to settlement
- **DLT Pilot Regime Compliance**: Adherence to European financial market regulations
- **Custodian-Grade Security**: Institutional-level asset custody for tokenized securities
- **SME and Green Finance**: Democratized access to sub-scale bonds, equities, and renewable project financing
- **Liquidity Creation**: Compliant secondary market with AMM and MTF integration

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router) with React 18
- **Styling**: Tailwind CSS + ShadCN UI + Framer Motion
- **State Management**: Zustand / Redux Toolkit
- **Wallet Integration**: Hiro Wallet SDK
- **Charts**: TradingView Widget / Recharts

### Backend
- **Blockchain Layer**: Stacks blockchain with Clarity smart contracts
- **API Services**: Node.js with NestJS framework
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + SIWS (Sign-In With Stacks)
- **File Storage**: AWS S3 / Supabase

### Infrastructure
- **Frontend Hosting**: Vercel
- **Backend Hosting**: AWS ECS / Fly.io
- **Monitoring**: Grafana + Prometheus
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

### Key Integrations
- **KYC/KYB**: Onfido / Sumsub API
- **Stablecoin Payments**: USDA on Stacks for dividends and settlements
- **MTF Connection**: API integration with licensed off-chain trading venues
- **Price Oracles**: Chainlink oracles (Stacks integration)

## Prerequisites

### System Requirements
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher (or yarn v1.22.0+)
- **Docker**: v20.10.0 or higher
- **PostgreSQL**: v14.0 or higher
- **Git**: v2.34.0 or higher

### Development Tools
- **Clarinet**: Stacks smart contract development toolkit
- **Stacks CLI**: For blockchain interactions
- **Hiro Wallet**: For testing wallet integrations

## Development Environment Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd secumint

# Install dependencies for all workspaces
npm install

# Or using yarn
yarn install
```

### 2. Environment Configuration

```bash
# Copy environment templates
cp apps/frontend/.env.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env

# Configure your environment variables
# - Database connection strings
# - Stacks network configuration
# - API keys for integrations
# - JWT secrets
```

### 3. Database Setup

```bash
# Start PostgreSQL (using Docker)
docker-compose up -d postgres

# Run database migrations
npm run db:migrate

# Seed development data
npm run db:seed
```

### 4. Smart Contract Development

```bash
# Install Clarinet
curl --proto '=https' --tlsv1.2 -sSf https://sh.clarinet.xyz | sh

# Initialize Clarinet project (if not already done)
clarinet new contracts

# Check contract syntax
npm run contracts:check

# Run contract tests
npm run contracts:test
```

### 5. Start Development Servers

```bash
# Start all services
npm run dev

# Or start services individually
npm run dev:frontend    # Next.js frontend on http://localhost:3000
npm run dev:backend     # NestJS API on http://localhost:3001
npm run dev:stacks      # Local Stacks node
```

## Project Structure

```
secumint/
├── apps/
│   ├── frontend/          # Next.js application
│   └── backend/           # NestJS API server
├── packages/
│   ├── shared/            # Shared utilities and types
│   ├── ui/                # Reusable UI components
│   └── contracts/         # Smart contract interfaces
├── contracts/             # Clarity smart contracts
├── docs/                  # Project documentation
├── infrastructure/        # Docker, deployment configs
├── tools/                 # Development scripts and utilities
└── tests/                 # Integration and E2E tests
```

## Testing Strategy

### Unit Tests
```bash
npm run test              # Run all unit tests
npm run test:frontend     # Frontend tests only
npm run test:backend      # Backend tests only
npm run test:contracts    # Smart contract tests
```

### Integration Tests
```bash
npm run test:integration  # API integration tests
npm run test:e2e          # End-to-end tests
```

### Test Coverage
```bash
npm run test:coverage     # Generate coverage reports
```

## Deployment

### Development
```bash
npm run deploy:dev        # Deploy to development environment
```

### Staging
```bash
npm run deploy:staging    # Deploy to staging environment
```

### Production
```bash
npm run deploy:prod       # Deploy to production environment
```

## Security Considerations

- **Multi-signature Wallets**: All custodian operations require multi-sig approval
- **MPC (Multi-Party Computation)**: Enhanced security for institutional custody
- **Smart Contract Audits**: All contracts undergo third-party security audits
- **KYC/AML Compliance**: Mandatory identity verification for all users
- **Regular Security Testing**: Ongoing penetration testing and bug bounty programs

## Compliance Framework

- **DLT Pilot Regime**: Full compliance with European financial market regulations
- **Securities Regulations**: Adherence to local securities laws and requirements
- **Data Protection**: GDPR compliance for user data handling
- **Audit Trail**: Comprehensive logging for regulatory reporting

## Contributing

Please read our contributing guidelines before submitting pull requests. All contributions must:

- Follow the established code style and conventions
- Include comprehensive tests for new features
- Maintain security best practices
- Include proper documentation updates

## Development Phases

### Phase 1 - MVP (4 Months)
- Securities issuance and registration smart contracts
- Custodian-grade wallet system
- KYC/KYB onboarding
- Stablecoin integration for payouts

### Phase 2 - Beta (3 Months)
- Secondary market integration with MTF
- Automated dividend distribution
- Governance module for corporate actions

### Phase 3 - Production (3 Months)
- AMM for select securities
- Institutional custody API
- Full DLT Pilot Regime compliance

## Support

For technical support and questions:
- Create an issue in this repository
- Contact the development team
- Review the documentation in the `/docs` directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This project handles regulated financial instruments. Ensure all development and deployment activities comply with applicable financial regulations and security requirements.