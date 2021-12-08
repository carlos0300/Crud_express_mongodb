const controller = {}

controller.index = (req, res, marca) =>{
    res.send('La conexión ha sido exitosa uwu')
}

controller.add = (req, res, marca) =>{
    var id = req.id;
    var marca = marca;
    var nombre = req.nombre;
    var year = req.year;
    var color = req.color;
    console.log(marca)
    res.send('a ver')
}

module.exports = controller