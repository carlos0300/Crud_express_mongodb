function insertMoto() {
            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://root:root@172.19.0.2:27017/db/db_motos/';
 
            MongoClient.connect(url, function(err, db) {

            //console.log(document.getElementById('id').value)
            db.collection('db_motos').insertOne({
            id: document.getElementById('id').value,
            marca: document.getElementById('marca').value,
            nombre: document.getElementById('nombre').value,
            year: document.getElementById('year').value,
            color: document.getElementById('color').value
            });
        });
        alert(document.getElementById("nombre").value);
            //alert(document.getElementById('id').value)
    }