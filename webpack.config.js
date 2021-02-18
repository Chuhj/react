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
  output: {
    // 출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
