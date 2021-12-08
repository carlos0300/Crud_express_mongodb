const path = require('path')
const express = require('express')
const app = express()
const init_db = require('../config/db')

//acá debemos pasar las rutas
const routes = require('./Routes/index_routes')
app.use(routes)

app.listen(3000, () => {
    console.log('servidor a la espera de conexiones')
})

init_db()
