const mongoose = require('mongoose')
var Contrato = require("../models/contratos")

module.exports.list = () => {
    return Contrato
        .find()
        .sort({designacao : 1})
        .exec()
}

module.exports.obtenerEntidades = () => {
    return Contrato.distinct('entidade_comunicante').exec();
};

module.exports.obtenerTipos = () => {
    return Contrato.distinct('entidade_comunicante').exec();
};

module.exports.findByEntidade = entidade => {
    return Contrato
    .find({entidade_comunicante:entidade})
    .sort({_idcontrato : 1})
    .exec()
}

module.exports.findByTipo = tipo => {
    return Contrato
    .find({tipoprocedimento:tipo})
    .sort({_idcontrato : 1})
    .exec()
}




module.exports.findById = id => {
    return Contrato
        .findOne({_id : id})
        .exec()
}

module.exports.insert = Contrato => {
    if((Contrato.find({_id : Contrato._id}).exec()).length != 1){
        var newContrato = new Contrato(Contrato)
        return newContrato.save()
    }
}

module.exports.update = (id, uc) => {
    return Contrato
        .findByIdAndUpdate(id, uc, {new : true})
}

module.exports.remove = id => {
    return Contrato
        .findOneAndDelete({_id : id})
}