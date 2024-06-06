/* eslint-env node */
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  entry: "./src/frontend/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
