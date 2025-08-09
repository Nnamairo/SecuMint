# SecuMint Development Tools

Utilities, scripts, and tools for SecuMint development and maintenance.

## Directory Structure

```
tools/
├── scripts/             # Development and deployment scripts
├── generators/          # Code generators and scaffolding
├── validators/          # Data validation utilities
├── migration/           # Database and data migration tools
├── testing/             # Testing utilities and helpers
└── monitoring/          # Monitoring and health check tools
```

## Available Tools

### Development Scripts

#### Setup and Installation
- `setup-dev.sh` - Complete development environment setup
- `install-deps.sh` - Install all project dependencies
- `setup-database.sh` - Database initialization and seeding

#### Code Generation
- `generate-api.js` - Generate API endpoints from OpenAPI specs
- `generate-types.js` - Generate TypeScript types from schemas
- `generate-contracts.js` - Generate contract interfaces

#### Database Tools
- `migrate.js` - Database migration runner
- `seed.js` - Database seeding utility
- `backup.js` - Database backup tool
- `restore.js` - Database restore utility

### Testing Utilities

#### Test Data Generation
- `generate-test-data.js` - Generate realistic test data
- `mock-services.js` - Mock external service responses
- `load-test.js` - Performance and load testing

#### Contract Testing
- `test-contracts.js` - Smart contract testing utilities
- `deploy-test-contracts.js` - Deploy contracts to test networks
- `verify-contracts.js` - Contract verification tools

### Deployment Tools

#### Environment Management
- `deploy.js` - Multi-environment deployment script
- `rollback.js` - Deployment rollback utility
- `health-check.js` - Post-deployment health checks

#### Configuration Management
- `validate-config.js` - Configuration validation
- `sync-secrets.js` - Secret synchronization across environments
- `update-env.js` - Environment variable management

### Monitoring and Maintenance

#### Health Monitoring
- `health-monitor.js` - Comprehensive health monitoring
- `performance-check.js` - Performance monitoring
- `security-scan.js` - Security vulnerability scanning

#### Data Management
- `cleanup.js` - Data cleanup and archival
- `analytics.js` - Usage analytics and reporting
- `compliance-report.js` - Compliance reporting tools

## Usage Examples

### Development Setup

```bash
# Complete development environment setup
./tools/scripts/setup-dev.sh

# Install dependencies
./tools/scripts/install-deps.sh

# Setup database
./tools/scripts/setup-database.sh
```

### Code Generation

```bash
# Generate API types
node tools/generators/generate-types.js

# Generate contract interfaces
node tools/generators/generate-contracts.js
```

### Testing

```bash
# Generate test data
node tools/testing/generate-test-data.js

# Run contract tests
node tools/testing/test-contracts.js

# Performance testing
node tools/testing/load-test.js
```

### Deployment

```bash
# Deploy to staging
node tools/scripts/deploy.js --env staging

# Deploy to production
node tools/scripts/deploy.js --env production

# Health check after deployment
node tools/scripts/health-check.js --env production
```

### Monitoring

```bash
# Run health monitor
node tools/monitoring/health-monitor.js

# Generate compliance report
node tools/monitoring/compliance-report.js

# Security scan
node tools/monitoring/security-scan.js
```

## Tool Configuration

Most tools can be configured via:
- Environment variables
- Configuration files in `tools/config/`
- Command-line arguments

### Configuration Files

- `tools/config/development.json` - Development environment config
- `tools/config/staging.json` - Staging environment config
- `tools/config/production.json` - Production environment config
- `tools/config/testing.json` - Testing configuration

## Custom Tool Development

### Creating New Tools

1. Create the tool script in the appropriate subdirectory
2. Add configuration to the relevant config file
3. Update this README with usage instructions
4. Add tests for the tool functionality

### Tool Standards

- Use TypeScript for type safety
- Include comprehensive error handling
- Provide clear logging and output
- Support configuration via environment variables
- Include help documentation (`--help` flag)

### Dependencies

Common dependencies used across tools:
- `commander` - Command-line interface
- `chalk` - Terminal styling
- `ora` - Loading spinners
- `inquirer` - Interactive prompts
- `dotenv` - Environment variable loading

## Troubleshooting

### Common Issues

1. **Permission Errors**
   ```bash
   chmod +x tools/scripts/*.sh
   ```

2. **Missing Dependencies**
   ```bash
   npm install
   ```

3. **Configuration Issues**
   - Check environment variables
   - Verify configuration files
   - Ensure secrets are properly set

### Getting Help

For tool-specific help:
```bash
node tools/[category]/[tool-name].js --help
```

### Logging

Most tools support different log levels:
- `--verbose` - Detailed logging
- `--quiet` - Minimal output
- `--debug` - Debug information

## Contributing

When adding new tools:
1. Follow the established directory structure
2. Include comprehensive documentation
3. Add appropriate tests
4. Update this README
5. Ensure tools work across all supported environments