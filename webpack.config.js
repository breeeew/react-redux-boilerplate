var webpack = require("webpack");

module.exports = {
    module: {
      loaders: [
        { test: /\.json$/, loader: "json-loader" },
        { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loaders: ["babel"] },
      ]
    },
    entry: "./src/index.js",
    output: {
      path: "assets/",
      filename: "bundle.js"
    }
}
