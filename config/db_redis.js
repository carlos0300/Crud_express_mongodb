//conexión con redis
const redis = require('redis')

client = redis.createClient({
    host: '172.18.0.4',
    port: 6379,
  
    password: '123456'
})

module.exports = client
