require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const filmRoutes = require('./routes/films')

const app = express()
app.use(express.json())
app.use(cors())



app.use('/films', filmRoutes)

mongoose.connect(process.env.MONGO_URI) //connect mongoose db
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`API listening on Port ${process.env.PORT}`);
        })
        

    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req,res) => {
    res.json({message: "welcome"})
})


module.exports = app

