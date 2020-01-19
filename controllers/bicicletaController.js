var Bicicleta = require('../models/bicicleta');

//listado de bicicletas almacendas
exports.bicicletas_list = function(req,res){
    res.render('bicicletas/index',{bicis : Bicicleta.allBicis});
}

// **create**
// **create request (get)**
exports.bicicleta_create_get = function(req,res){
    res.render('bicicletas/create');
}
// ** create confirm (post)**
exports.bicicleta_create_post = function(req,res){
    var bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);

    res.redirect('/bicicletas')
}

// **delete**
exports.bicicleta_delete_post = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.redirect('/bicicletas');
}

