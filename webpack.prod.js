const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      library: { type: "var", name: "header" },
      filename: "headerRemoteEntry.js",
      exposes: {
        // expose each component
        "./Header": "./src/components/Header",
        "./EventBus": "./src/components/EventBus",
      },
      remotes: {
        appContainer: "appContainer",
      },
      shared: {
        ...deps,
        react: { singleton: true },
        uuid: { singleton: true },
        "react-dom": {
          singleton: true,
        },
        "@mui/material": {
          singleton: true,
        },
      },
    }),
  ],
  performance: { hints: false },
};
