import React from 'react'
import {
    renderToString
} from 'react-dom/server'
import {
    StaticRouter
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../routes'
import getStore from '../store'

export const render = (req, res) => {
    const content = renderToString((
        <Provider store={getStore()}>
            <StaticRouter
                context={{}}//数据通信
                location={req.path} //路由识别
            >
                {Routes}
            </StaticRouter>
        </Provider>
))
    res.send(`
    <html>
      <head>
        <title> renderToString </title>
      </head>
      <body>
      <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
}