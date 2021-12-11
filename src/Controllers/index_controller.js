const path = require('path')

const controller = {}

controller.index = (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/views/index.html'))
}

controller.add = (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/views/form.html'))
}

controller.insert = (req, res) =>{

    const PersonaModel = require('../Models/Persona')
    const dbRedis = require('../../config/db_redis')

    //insert a mongo
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
    //insert a redis
    dbRedis.hmset("01", {
        "name": req.body.name,
        "lastname": req.body.lastname,
        "age": req.body.age,
        "hobbie": req.body.hobbie,
        "email": req.body.email
    })
    res.redirect('addPersona') 
}

module.exports = controller