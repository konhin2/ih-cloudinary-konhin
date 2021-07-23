// 1. IMPORTACIONES
const express = require('express')
const app = express()

const conectarDB = require('./config/db')

// EJECUTAR VARIABLES DE ENTORNO
require('dotenv').config()


// 2. MIDDLEWARES

// CONECTAR A BASE DE DATOS
conectarDB()

// ESTABLECER HBS COMO MOTOR DE HTML
app.set('view engine', 'hbs')

// 3. RUTAS

// RUTA MOVIES
app.use('/movies', require('./routes/movie.routes'))

// RUTA HOME
app.use('/', require('./routes/index.routes'))



// 4. SERVIDOR
app.listen (process.env.PORT, () => {
    console.log('Servidor en el puerto ' + process.env.PORT)
})