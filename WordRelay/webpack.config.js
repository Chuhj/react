const path = require("path");
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel', // 옛날 문법으로 옮길 때 핫 리로딩 기능 추가
        ],
      },
    }],
  },

  plugins: [
    new RefreshWebpackPlugin()
  ],

  output: {
    // 출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true
  }
};
