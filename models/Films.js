const mongoose = require('mongoose')

const Schema = mongoose.Schema

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Film', filmSchema)
