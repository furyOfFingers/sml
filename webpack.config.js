const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components/"),
      Constants: path.resolve(__dirname, "src/Constants/"),
      Modules: path.resolve(__dirname, "src/Modules/"),
      Types: path.resolve(__dirname, "src/Types/"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              sourceMap: true,
              modules: {
                localIdentName: "[local]--[hash:base64:4]",
              },
            },
          },
          { loader: "stylus-loader" },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    liveReload: true,
  },
  plugins: [htmlPlugin],
};
