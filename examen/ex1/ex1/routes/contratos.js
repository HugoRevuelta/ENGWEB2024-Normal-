var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos')

router.get('/', function(req, res) {
    if(req.query.entidade_comunicante){
      Contrato.findByEntidade(req.query.entidade_comunicante)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
    }else if(eq.query.tipoprocedimento){
        Contrato.findBytipo(req.query.tipoprocedimento)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
    }else{
      Contrato.list()
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
    }
});

router.get('/entidades', function(req, res){
    Contrato.obtenerEntidades()
    .then(entidades =>{
        const entidadesOrdenadas = entidades.sort();
        res.jsonp(entidadesOrdenadas);
    })
    .catch(erro => res.jsonp(erro))
})

router.get('/tipos', function(req, res){
    Contrato.obtenerTipos()
    .then(tipos =>{
        const tiposOrdenados = tipos.sort();
        res.jsonp(tiposOrdenados);
    })
    .catch(erro => res.jsonp(erro))
})

router.get('/:id', function(req, res) {
    Entrega.findById(req.params.idcontrato)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.post('/', function(req, res) {
    UC.insert(req.body)
      .then(data => res.status(201).jsonp(data))
      .catch(erro => res.jsonp(erro))
  });

  router.put('/:id', function(req, res) {
    UC.update(req.params.id, req.body)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res) {
    return UC.remove(req.params.id)
      .then(console.log("Deleted " + req.params.id))
      .catch(erro => res.jsonp(erro))
  });

module.exports = router;