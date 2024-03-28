const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource"
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  devServer: {
    static: {
      directory: "./dist"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="app"></div></body></html>',
      filename: "index.html",
      title: "txWidget - Widget for your Tesla home screen"
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ]
};

module.exports = config;
