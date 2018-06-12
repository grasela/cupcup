const mongoose = require('../db/connection')
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema

const cupSchema = new Schema({
    model: String,
    size : String,
    base : {
        color : String,
        material: String
    },
    lid : {
        color : String,
        material : String
    },
    logo : {
        url: String
    },
    band: {
        color: String,
        material : String
    },
    price: Number,
    priceHistory: [Number]

})

cupSchema.plugin(timestamps)

const cupModel = mongoose.model('Cup', cupSchema)

module.exports = cupModel

