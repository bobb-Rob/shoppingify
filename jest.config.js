module.exports = {
  // Add support for ES6 syntax
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  // Ignore node_modules by default, but include specific modules that need processing
  transformIgnorePatterns: ['/node_modules/(?!axios.*)'],

  // Set up global environment variables that will be available in all tests
  globals: {
    NODE_ENV: 'test',
  },

  // Set up some test-specific configuration
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
