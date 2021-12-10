const path = require('path')
const express = require('express')
const app = express()

//acá debemos pasar las rutas
const routes = require('./Routes/index_routes')
//const db = require('../config/db')
const redis = require('redis');
client = redis.createClient({
    host: '172.17.0.2',
    port: 6379
})
if(client.open){
    console.log("connected")
}
client.on('connect', () => {
    console.log('connected')
})
client.set("id", 2)

app.use(routes)

// ruta estatica para las vistas
//static files (carpeta public)
app.use(express.static(path.join(__dirname, '../public/views')))

app.listen(3000, () => {
    console.log('servidor activo en el puerto 3000')
})


