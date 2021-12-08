const express = require('express')
const router = express.Router()

//acá debemos pasar los controladores
const controller = require('../Controllers/index_controller')

router.get('/', controller.index)

router.post('/addMoto', controller.add)

module.exports = router