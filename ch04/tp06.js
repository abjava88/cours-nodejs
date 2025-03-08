const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    throw new Error('BROKEN');
})

app.get('/users', (req, res, next) => {
    console.log("Get usres endpoint")
    res.status = 200
    res.send("Get usres endpoint")
})

app.get('/admin', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      res.send("lecture avec succes");
    })
  })



app.listen(port, () => {
  console.log("Example app listening on port ", port);
})