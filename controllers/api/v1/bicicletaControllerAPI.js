var Bicicleta = require('../../../models/bicicleta');

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas : Bicicleta.allBicis
    })
}

// HTTP RESPONSES: https://developer.mozilla.org/es/docs/Web/HTTP/Status

exports.bicicleta_create = function(req,res){
    var bici = Bicicleta.nuevaBicicleta(req.body.id,req.body.color,req.body.modelo,req.body.lat,req.body.lng);
    Bicicleta.add(bici);

    res.status(200).json({
        bicicletas: bici
    })
}

exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();//no hay contenido en la respuesta
}

exports.bicicleta_update = function(req,res){
    var bici = Bicicleta.findById(req.params.id);
    //bici.id = req.body.id;
    //bici.color = req.body.color;
    //bici.modelo = req.body.modelo;
    //bici.ubicacion = [req.body.lat, req.body.lng];
    res.status(200);
}