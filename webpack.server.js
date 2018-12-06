const path = require('path')
const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}
module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    }]
  }
}