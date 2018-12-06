# webpack的自动打包和服务器的自动重启

## 自动打包： "build": "webpack --config webpack.server.js --watch",

## 自动重启： "serve": "nodemon --watch dist --exec node \"./dist/bundle.js\""

## 使用 npm-run-all 模块提升开发效率

```json
"dev": "npm-run-all --parallel dev:**",
"dev:serve": "nodemon --watch dist --exec node \"./dist/bundle.js\"",
"dev:build": "webpack --config webpack.server.js --watch",
```