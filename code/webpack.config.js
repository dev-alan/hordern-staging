const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "./dist/assets/bundle.min.js"
  },
  module: {
    loaders: [
      {test: /\.scss$/i, loader: extractCSS.extract(['css','sass'])},
      {test: /\.less$/i, loader: extractLESS.extract(['css','less'])}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  watch: true
}