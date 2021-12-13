const mongoose = require('mongoose')

const personaSchema = new  mongoose.Schema({
    id: Number,
    name: String,
    lastname: String,
    age: Number,
    hobbie: String,
    email: String
})
const persona = mongoose.model('persona',personaSchema)

module.exports = persona