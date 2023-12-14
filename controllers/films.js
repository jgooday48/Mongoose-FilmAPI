const { default: mongoose } = require('mongoose')
const Film = require('../models/Films')


const getFilms = async (req,res) => { // get all films
    const films = await Film.find({}).sort({createdAt: -1})

    res.status(200).json(films)

}


const getFilm = async (req,res) => { // get a film
    const { id } = req.params

    const film = await Film.findById(id)

    if(!film) {
        return res.status(404).json({error: "no such film"})
    }

    res.status(200).json(film)
}


const createFilm = async (req,res) => { //create a film
    const {title, year} = req.body
    try {
        const film = await Film.create({title, year})
        res.status(200).json(film)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

const updateFilm = async (req,res) => {// update a film
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "film doesn't exist"})
    }

    const film = await Film.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!film) {
        return res.status(404).json({error: "no such film"})
    }

    res.status(200).send(film)
}

const deleteFilm = async (req,res) => { // delete a film
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "film doesn't exist"})
    }

    const film = await Film.findOneAndDelete({_id: id})

    if(!film) {
        return res.status(404).json({error: "no such film"})
    }

    res.status(200).json(film)
}


module.exports = {
    createFilm, getFilms, getFilm, updateFilm, deleteFilm
}
