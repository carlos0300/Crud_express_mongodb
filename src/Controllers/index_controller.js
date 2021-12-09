const path = require('path')
const controller = {}

controller.index = (req, res) =>{
    res.send('La conexión ha sido exitosa uwu')
}

controller.add = (req, res) =>{
    res.sendFile(path.join(__dirname, '../../public/views/form_mongo.html'))
}

module.exports = controller