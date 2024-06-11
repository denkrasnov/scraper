const path = require("path");

module.exports = {
  stories: ["../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-actions"
  ],
  webpackFinal: async (baseConfig: any) => {
    const include = [path.resolve(__dirname, "../src"), __dirname];
    const exclude = [path.resolve(__dirname, "../src/**/__tests__")];
    const config = { ...baseConfig };

    const rules = [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include,
        exclude
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: { localIdentName: "[local]--[hash:base64:5]" },
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
        include,
        exclude
      }
    ];
    const resolve = {
      ...config.resolve,
      extensions: [".tsx", ".ts", ".js"]
    };

    config.module.rules = rules;
    config.resolve = resolve;

    // Return the altered config
    return config;
  }
};
