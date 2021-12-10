const express = require('express')
const router = express.Router()

//acá debemos pasar los controladores
const controller = require('../Controllers/index_controller')

router.get('/', controller.index)

router.get('/addmoto', controller.add)

router.post('/addmotos', controller.insert)

module.exports = router