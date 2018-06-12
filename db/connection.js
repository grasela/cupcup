const mongoose = require('mongoose')

const url = 'mongodb://localhost/cupcup'
mongoose.connect(url)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('established connection to mongodb')
})

module.exports = mongoose
