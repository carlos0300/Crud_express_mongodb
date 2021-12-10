const mongoose = require('mongoose')

const DB_URI = 'mongodb://root:root@172.19.0.2:27017/motos'

module.exports = () =>{

    const connect = () =>{

        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB: ERROR!!')
                    console.log(err)
                }else{
                    console.log('Conexion DB correcta')
                }
            }
        )
    }

    connect()

}