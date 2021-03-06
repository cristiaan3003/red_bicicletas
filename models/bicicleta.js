var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: '+ this.id + ' | color: ' + this.color;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.nuevaBicicleta = function(id,color,modelo,lat,lng){
    var bici = new Bicicleta(id, color, modelo);
    bici.ubicacion = [lat,lng];
    
    return bici;
}


Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if (aBici)
        return aBici;
    else
        throw Error(`No existe la bicicleta id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    for(i=0;i<Bicicleta.allBicis.length;i++){
        if(Bicicleta.allBicis[i].id==aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

var a = new Bicicleta(1,'rojo','urbana',[-31.63748,-60.7098175])
var b = new Bicicleta(2,'blanca','urbana',[-31.63924,-60.70800])

Bicicleta.add(a);
Bicicleta.add(b);

module.exports  = Bicicleta;
