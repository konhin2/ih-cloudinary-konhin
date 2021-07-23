const Movie = require('./../models/Movies.model')
const fileUploader = require('./../config/cloudinary.config')

// GET - /

exports.listMovies = async (req, res) => {
    // Movie.find({})
    //     .then(peliculasEncontradas => {
    //         res.render('movie-views/movie-list', {
    //             movies: peliculasEncontradas
    //         })
    //     })
    //     .catch(err => console.log(err))
    try {
        const peliculasEncontradas = await Movie.find({})

        res.render('movie-views/movie-list', {
            movies: peliculasEncontradas
        })
    } catch(err) {
        console.log(err)
    }
}

// GET - /create
exports.createMovie = async (req, res) => {
    res.render('movie-views/movie-create')
}

// POST - /create
exports.processMovie = async (req, res) => {
    const { title, description } = req.body

    Movie.create({
        title,
        description,
        imageUrl: req.file.path
    })
        .then((peliculaCreada) => {
            res.redirect("/movies")
        })
        .catch(err => console.log(err))
}

// GET - /:id/edit
exports.editMovie = async (req, res) => {
    const { id } = req.params
    Movie.findById(id)
        .then(peliculaEncontrada => {
            res.render('movie-views/movie-edit', peliculaEncontrada)
        })
        .catch(err => console.log(err))
}

// POST - /:id/edit
exports.updateMovie = async (req, res) => {
    const { id } = req.params
    const { title, description, existingImage } = req.body
    let imageUrl
    if (req.file) {
        imageUrl = req.file.path
    } else {
        imageUrl = existingImage
    }
    Movie.findByIdAndUpdate(id, {
        title,
        description,
        imageUrl
    }, {    
        new: true
    })
        .then(() => {
            res.redirect("/movies")
        })
        .catch(err => console.log(err))
}