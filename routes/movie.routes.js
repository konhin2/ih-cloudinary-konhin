// 1. IMPORTACIONES
const express = require('express')
const router = express.Router()

const movieController = require('./../controllers/movieController')

const fileUploader = require('./../config/cloudinary.config')

// 2. RUTEO
router.get('/', movieController.listMovies)

router.get('/create', movieController.createMovie)

router.post('/create', fileUploader.single('movie-cover-image'), movieController.processMovie)

router.get('/:id/edit', movieController.editMovie)

router.post('/:id/edit', fileUploader.single('movie-cover-image'), movieController.updateMovie)

// 3. EXPORTACIONES
module.exports = router