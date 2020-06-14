/* eslint-env node */
const merge = require("webpack-merge");
const webpack = require("webpack");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./src/frontend/index.tsx"
  ],

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
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
              modules: {
                localIdentName: "[path][name]__[local]"
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
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
