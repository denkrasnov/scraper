/* eslint-env node */
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const chalk = require("chalk");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
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
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `webpack building [:bar] ${chalk.green.bold(":percent")}`,
      complete: chalk.hex("#224dff")("=")
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ]
};
