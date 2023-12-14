const express = require('express')

const { createFilm, getFilm, getFilms, deleteFilm, updateFilm } = require('../controllers/films')


const router = express.Router()

// get all films
router.get('/', getFilms)

//get a film
router.get('/:id', getFilm)

//create a film
router.post('/', createFilm)

//update a film
router.patch('/:id', updateFilm)

//delete a film
router.delete('/:id', deleteFilm)


module.exports = router
