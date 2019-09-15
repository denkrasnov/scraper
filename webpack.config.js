/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./src/index.tsx"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          "svg-react-loader"
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `webpack building [:bar] ${chalk.green.bold(":percent")}`,
      complete: chalk.hex("#224dff")("=")
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
