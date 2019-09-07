module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["raf/polyfill"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupFile.ts"]
};
