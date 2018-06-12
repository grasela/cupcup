const express = require('express')
const app = express()
const cupRouter = require('./cup/cupRouter')
const bodyParser = require('body-parser')


const PORT = process.env.PORT
app.use(bodyParser.json())

app.use('/', cupRouter)


app.listen(3000, () => {
    console.log('running on port 3000')
}) 

