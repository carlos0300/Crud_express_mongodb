const express = require('express')
const router = express.Router()
// el body parser sirve para traer los datos de un formario a través de un Json
const bodyParser = require('body-parser')


//acá debemos pasar los controladores
const controller = require('../Controllers/index_controller')

router.get('/', controller.index)

router.get('/addPersona', controller.add)

router.get('/getPersonaMongo',controller.getmongo)

router.post('/insertPersona', bodyParser.urlencoded({extended:false}), controller.insert)

module.exports = router