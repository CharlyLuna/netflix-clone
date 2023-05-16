module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.m?js': 'babel-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '\\.(mp4)$': '<rootDir>/tests/__mocks__/fileMock.js'
  }
}
