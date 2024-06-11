const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0, // Enable all future CSS
      browsers: "last 2 versions"
    }),
    postcssImport
  ]
};
