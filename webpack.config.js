const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: isDev ? "development" : "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devtool: isDev ? "source-map" : "none",
  entry: "./server/index.js",
  target: "node", // 告诉webpack，这个文件是node环境
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
  },
  node: false, // 关闭针对node的模拟行为
  plugins: [new CleanWebpackPlugin()],
};
