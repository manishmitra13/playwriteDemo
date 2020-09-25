module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  preset: 'jest-playwright-preset',
  collectCoverage: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  browsers: ['chromium'],
  launchOptions: {
    headless: false
  },
}