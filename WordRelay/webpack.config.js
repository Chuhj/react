const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // entry의 파일확장자 생략가능하게 해줌
  },
  entry: {
    // 입력
    app: ["./client"],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },

  output: {
    // 출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
