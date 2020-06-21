module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["raf/polyfill"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^~app/(.*)$": "<rootDir>/src/frontend/$1",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileMock.tsx"
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupFile.tsx"],
  collectCoverageFrom: [
    "src/frontend/**/*.{ts,tsx}",
    "!**/types.tsx",
    "!src/**/{__stories__,__tests__}/**"
  ],
  collectCoverage: false,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
