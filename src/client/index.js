import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'

import Routes from '../routes'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}

// client 代码，服务器端执行一次，客户端再执行一次
ReactDOM.hydrate( <App /> , document.getElementById('root'))