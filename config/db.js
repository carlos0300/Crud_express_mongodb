const mongoose = require('mongoose')

const DB_URI = ''

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
                }else{
                    console.log('Conexión correcta')
                }
            }
        )
    }

    connect()

}