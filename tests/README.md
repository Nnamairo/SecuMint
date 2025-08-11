# Clarinet Tests

Install dev deps in this folder: npm install
Run tests: npx vitest run
Or from repo root: cd tests && npm i && npx vitest run
# SecuMint Testing Suite

Comprehensive testing framework for the SecuMint tokenized securities platform.

## Testing Strategy

### Test Pyramid

1. **Unit Tests** (70%)
   - Individual function and component testing
   - Fast execution and isolated testing
   - High code coverage requirements

2. **Integration Tests** (20%)
   - API endpoint testing
   - Database integration testing
   - Smart contract integration testing

3. **End-to-End Tests** (10%)
   - Complete user workflow testing
   - Cross-system integration testing
   - Regulatory compliance testing

## Directory Structure

```
tests/
├── unit/                # Unit tests
│   ├── frontend/        # Frontend component tests
│   ├── backend/         # Backend service tests
│   └── contracts/       # Smart contract unit tests
├── integration/         # Integration tests
│   ├── api/             # API integration tests
│   ├── database/        # Database integration tests
│   └── blockchain/      # Blockchain integration tests
├── e2e/                 # End-to-end tests
│   ├── user-flows/      # Complete user journey tests
│   ├── compliance/      # Regulatory compliance tests
│   └── performance/     # Performance and load tests
├── fixtures/            # Test data and fixtures
├── helpers/             # Test utilities and helpers
├── mocks/               # Mock services and data
└── config/              # Test configuration files
```

## Testing Frameworks and Tools

### Frontend Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - React component testing
- **Cypress** - End-to-end testing
- **Storybook** - Component documentation and testing

### Backend Testing
- **Jest** - Unit and integration testing
- **Supertest** - HTTP assertion testing
- **Test Containers** - Database testing with Docker

### Smart Contract Testing
- **Clarinet** - Clarity contract testing
- **Vitest** - Fast unit testing for TypeScript
- **Stacks.js** - Blockchain interaction testing

### Performance Testing
- **Artillery** - Load testing
- **Lighthouse** - Frontend performance testing
- **K6** - API performance testing

## Test Categories

### Functional Tests

#### Securities Issuance
- Token creation and minting
- Metadata management
- Compliance verification
- Ownership tracking

#### Custody Operations
- Multi-signature wallet creation
- Asset transfer controls
- Institutional custody features
- Emergency procedures

#### Trading Functionality
- Order placement and matching
- Trade execution
- Settlement processes
- DvP implementation

#### Governance Features
- Voting mechanisms
- Proposal management
- Corporate actions
- Shareholder rights

### Security Tests

#### Authentication and Authorization
- JWT token validation
- SIWS (Sign-In With Stacks) testing
- Role-based access control
- Session management

#### Smart Contract Security
- Reentrancy attack prevention
- Access control verification
- Integer overflow/underflow
- Front-running protection

#### API Security
- Input validation
- SQL injection prevention
- XSS protection
- Rate limiting

### Compliance Tests

#### KYC/AML Testing
- Identity verification workflows
- AML screening processes
- Compliance reporting
- Audit trail verification

#### Regulatory Compliance
- DLT Pilot Regime requirements
- Securities regulation compliance
- Data protection (GDPR)
- Financial reporting standards

### Performance Tests

#### Load Testing
- Concurrent user simulation
- Database performance under load
- Blockchain transaction throughput
- API response times

#### Stress Testing
- System breaking points
- Recovery mechanisms
- Resource utilization
- Memory leak detection

## Running Tests

### All Tests
```bash
# Run complete test suite
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Specific Test Categories
```bash
# Unit tests only
npm run test:unit

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e

# Smart contract tests
npm run test:contracts

# Performance tests
npm run test:performance
```

### Environment-Specific Testing
```bash
# Development environment
npm run test:dev

# Staging environment
npm run test:staging

# Production smoke tests
npm run test:prod:smoke
```

## Test Data Management

### Fixtures
- Predefined test data sets
- Realistic user profiles
- Sample securities data
- Mock external service responses

### Data Generation
- Dynamic test data creation
- Randomized testing scenarios
- Edge case data generation
- Performance test data sets

### Database Seeding
```bash
# Seed test database
npm run test:seed

# Clean test database
npm run test:clean

# Reset test environment
npm run test:reset
```

## Continuous Integration

### GitHub Actions Workflow
- Automated test execution on PR
- Multi-environment testing
- Security scanning
- Performance regression testing

### Test Reporting
- Coverage reports
- Performance metrics
- Security scan results
- Compliance test results

### Quality Gates
- Minimum code coverage (80%)
- No critical security vulnerabilities
- Performance benchmarks met
- All compliance tests passing

## Mock Services

### External API Mocks
- KYC/AML service responses
- Stablecoin contract interactions
- Oracle price feeds
- MTF trading venue APIs

### Blockchain Mocks
- Stacks node responses
- Transaction simulation
- Block generation
- Contract deployment

## Test Configuration

### Environment Variables
```bash
# Test database
TEST_DATABASE_URL=postgresql://test:test@localhost:5433/secumint_test

# Test blockchain
TEST_STACKS_NETWORK=devnet
TEST_STACKS_API_URL=http://localhost:3999

# Mock services
USE_MOCK_SERVICES=true
MOCK_KYC_RESPONSES=true
```

### Configuration Files
- `jest.config.js` - Jest configuration
- `cypress.config.js` - Cypress configuration
- `clarinet.toml` - Smart contract testing
- `artillery.yml` - Load testing configuration

## Best Practices

### Test Writing Guidelines
1. **Descriptive Test Names** - Clear, specific test descriptions
2. **Arrange-Act-Assert** - Structured test organization
3. **Independent Tests** - No test dependencies
4. **Deterministic Results** - Consistent, repeatable outcomes

### Code Coverage
- Aim for 80%+ code coverage
- Focus on critical business logic
- Include edge cases and error scenarios
- Regular coverage monitoring

### Test Maintenance
- Regular test review and updates
- Remove obsolete tests
- Update tests with code changes
- Performance test optimization

## Debugging Tests

### Common Issues
1. **Flaky Tests** - Timing and async issues
2. **Environment Dependencies** - External service availability
3. **Data Conflicts** - Test data interference
4. **Resource Cleanup** - Memory and connection leaks

### Debugging Tools
- Test debugger integration
- Detailed logging
- Screenshot capture (E2E tests)
- Network request monitoring

## Contributing to Tests

### Adding New Tests
1. Follow the established directory structure
2. Use appropriate testing frameworks
3. Include comprehensive test cases
4. Update documentation

### Test Review Process
- Code review for test quality
- Performance impact assessment
- Coverage improvement verification
- Documentation updates

For detailed testing procedures and examples, refer to the specific test category documentation in each subdirectory.