const express = require('express');
const app = express()
// const port = 3000

app.get('/home', (req, res) => {
  res.send('AAT Hello World! g8wef275893745')
})

app.listen(3000)