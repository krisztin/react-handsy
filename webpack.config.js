var webpack = require("webpack"); //best practice to require...ES6 import

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,  // look for files that has a .js extension
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "react", "stage-0"]
        }
      },
      {
          test: /\.json$/,
          exclude: /(node_modules)/,
          loader: "json-loader"
      }
    ]
  }
}