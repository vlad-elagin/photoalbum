const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./server/src/index.ts",
  devtool: "inline-source-map",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      "@server": path.resolve(__dirname, "server/src"),
      "@models": path.resolve(__dirname, "server/src/models"),
      "@schema": path.resolve(__dirname, "server/src/schema"),
      "@services": path.resolve(__dirname, "server/src/services"),
      "@utils": path.resolve(__dirname, "server/src/utils"),
    },
  },
  watch: NODE_ENV === "development",
  externals: [nodeExternals()],
};
