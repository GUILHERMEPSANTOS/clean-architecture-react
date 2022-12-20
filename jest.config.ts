import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};

export default config;
