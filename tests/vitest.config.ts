/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { vitestSetupFilePath, getClarinetVitestsArgv } from '@hirosystems/clarinet-sdk/vitest';

export default defineConfig({
  test: {
    environment: 'clarinet',
    setupFiles: [vitestSetupFilePath],
    environmentOptions: {
      clarinet: {
  ...getClarinetVitestsArgv(),
  // ensure we point to the workspace root Clarinet.toml (one level up from tests/)
  manifestPath: '../Clarinet.toml',
      },
    },
  },
});
