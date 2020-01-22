var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("__dirname", __dirname);

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      componentSourceFiles: path.resolve(__dirname, "../src"),
      // For local testing, resolve to only one copy of React, otherwise
      // will get invariant errors when using React hooks
      // https://github.com/facebook/react/issues/15315
      react: path.resolve("./node_modules/react")
    },
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
