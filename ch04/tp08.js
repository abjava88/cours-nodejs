const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());
app.post('/user', (req, res, next) => {
    console.log("Get usres endpoint")
    let user = req.body;
    console.log("User: ", user)
    res.send("Post user endpoint")
})
app.listen(port, () => {
    console.log("Example app listening on port ", port)
})