var mongoose = require("mongoose")

var contratoSchema = new mongoose.Schema({
    _idcontrato: String,
    nAnuncio :String,
    tipoprocedimento :String,
    objectoContrato :String,
    dataPublicacao :String,
    dataCelebracaoContrato :String,
    precoContratual :String,
    prazoExecucao :String,
    NIPC_entidade_comunicante :String,
    entidade_comunicante :String,
    fundamentacao :String

}, { versionKey: false })

module.exports = mongoose.model('contrato', contratoSchema)