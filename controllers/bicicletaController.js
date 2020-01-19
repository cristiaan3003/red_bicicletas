var Bicicleta = require('../models/bicicleta');

//listado de bicicletas almacendas

exports.bicicletas_list = function(req,res){
    res.render('bicicletas/index',{bicis : Bicicleta.allBicis});
}
