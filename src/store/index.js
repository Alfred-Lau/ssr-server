import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'xiaoxiang' }, action) => {
    return state;
}

// 单例

const getStore = () => {
    return  createStore(reducer, applyMiddleware(thunk))
}

export default getStore