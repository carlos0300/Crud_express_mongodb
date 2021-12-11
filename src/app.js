const path = require('path')
const express = require('express')
const app = express()

//acá debemos pasar las rutas
const routes = require('./Routes/index_routes')
const db = require('../config/db')

app.use(routes)

// ruta estatica para las vistas
//static files (carpeta public)
app.use(express.static(path.join(__dirname, '../public/views')))

app.listen(3000, () => {
    console.log('servidor activo en el puerto 3000')
})


