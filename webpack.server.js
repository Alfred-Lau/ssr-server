const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  // 用来支持node打包
  externals: [nodeExternals()],
}

const config = merge(webpackBaseConfig, serverConfig)
module.exports = config