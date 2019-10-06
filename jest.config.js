module.exports = {
  preset: "ts-jest",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["raf/polyfill"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupFile.tsx"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js}",
    "!src/**/{__stories__,__tests__}/**"
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  coveragePathIgnorePatterns: ["!*.d.ts"]
};
