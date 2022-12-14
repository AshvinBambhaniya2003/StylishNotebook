const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello  Ashvin Bambhaniya!')
})

app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`)
})