const path = require('path')

const controller = {}

controller.index = (req, res) =>{
    res.send('La conexión ha sido exitosa uwu')
}

controller.add = (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/views/form_mongo.html'))
}

controller.insert = (req, res) =>{

    const PersonaModel = require('../Models/Persona')
    const insert = async() => {
        const persona = new PersonaModel(
            {
                name: req.body.name,
                lastname: req.body.lastname,
                age: req.body.age,
                hobbie: req.body.hobbie,
                email: req.body.email
            }      
        )
            const resultado = await persona.save()
    }
    insert()
    res.redirect('addPersona') 
}

module.exports = controller