const mongoose = require('mongoose')
const schema = mongoose.Schema

const personaSchema = schema({
    name: String,
    lastname: String,
    age: Number,
    hobbie: String,
    email: String
})

module.exports = mongoose.model('persona', personaSchema)