const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      <title>title</title>
      </head>
      <body>
        <p>name</p>
        <h1>first lesson</h1>
      </body>
    </html>
  `)
})
app.listen(3000)