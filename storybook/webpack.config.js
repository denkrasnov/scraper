module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader")
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true,
              modules: { localIdentName: "[local]--[hash:base64:5]" },
              importLoaders: 1
            }
          },
          require.resolve("postcss-loader")
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
