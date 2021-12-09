const path = require('path')
const express = require('express')
const app = express()
//const init_db = require('../config/db')

//acá debemos pasar las rutas
const routes = require('./Routes/index_routes')
app.use(routes)

// ruta estatica para las vistas
//static files (carpeta public)
app.use(express.static(path.join(__dirname, '../public/views')))


app.listen(3000, () => {
    console.log('servidor a la espera de conexiones')
})

//init_db()
