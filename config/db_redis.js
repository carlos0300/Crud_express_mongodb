//conexión con redis
const redis = require('redis')

client = redis.createClient({
    host: '172.17.0.2',
    port: 6379,
  
    password: '123456'
})

module.exports = client
