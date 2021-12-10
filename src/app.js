const path = require('path')
const express = require('express')
const app = express()
//const init_db = require('../config/db')

const mongoose = require('mongoose')
mongoose.connect('mongodb://root:root@172.19.0.2:27017/motos?authSource=admin')
.then(db => console.log('DB conected!'))
.catch(err => console.log(err));

const personaSchema = mongoose.Schema({
    Nombre: String,
    Apellidos: String,
    Edad: Number,
    Aficiones: String,
    Amigos: String
})

const PersonaModel = mongoose.model('personas', personaSchema)

const crear = async ()=>{
    const persona = new PersonaModel(
        {
            Nombre: "Joaquin",
            Apellidos: "Rodriguez",
            Edad: 18,
            Aficiones:"fútbol",
            Amigos: "Andrés"
        }      
    )
        const resultado = await persona.save()
        console.log(resultado)
}
crear()

const body_parser = require('body-parser')

//acá debemos pasar las rutas
const routes = require('./Routes/index_routes');
const db = require('../config/db');
const res = require('express/lib/response');
app.use(routes)

// ruta estatica para las vistas
//static files (carpeta public)
app.use(express.static(path.join(__dirname, '../public/views')))

//body-parser
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))


app.listen(3000, () => {
    console.log('servidor activo en el puerto 3000')
})

module.exports = mongoose

//init_db()
