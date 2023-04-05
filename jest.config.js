module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>setup-jest.ts'],
  resetMocks: true,
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg|png|jpg)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      branches: 90,
      functions: 90,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    'src/react-app-env.d.ts',
    'src/index.tsx',
  ],
};
