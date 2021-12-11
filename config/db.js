// conexión con mongoDB
const mongoose = require('mongoose')
const URI = 'mongodb://root:root@172.19.0.2:27017/db_personas?authSource=admin'

mongoose.connect(URI)
.then(db => console.log('DB conected!'))
.catch(err => console.log(err))

module.exports = mongoose

//conexión con redis
