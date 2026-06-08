module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json"
      }
    ]
  },

  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$":
      "identity-obj-proxy"
  }
};