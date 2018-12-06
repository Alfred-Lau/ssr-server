import express from 'express'
import { render } from './utils';

const app = express()

// 设置静态文件目录:js ,json,... ...
app.use(express.static('public'))

app.get('/*', (req, res) => {
    render(req, res)
})
app.listen(3000)