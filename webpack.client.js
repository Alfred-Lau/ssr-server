const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: resolve('public')
    },
    // 用来支持node打包

}

const config = merge(webpackBaseConfig, clientConfig)
module.exports = config