var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0,16)
  axios.get("http://localhost:3000/contratos?_sort=nome")
  .then(resp =>{
    var compositores = resp.data 
    res.status(200).render("contratosListPage",{"lContratos":contratos, "date": d})
  })
  .catch(erro=>{  
    res.status(501).render("error",{"error":erro})
  });
});

router.get('/:id', function(req, res, next) {
    var d = new Date().toISOString().substring(0,16)
    axios.get("http://localhost:3000/contratos/"+ req.params._idcontrato)
    .then(resp =>{
      var contrato = resp.data 
      res.status(200).render("contratoPage",{"contrato": contrato, "date": d})
    })
    .catch(erro=>{  
      res.status(503).render("error",{"error":erro})
    });
  });

router.get('/entidades/:nipc',function(req, res, next ){
    var d = new Date().toISOString().substring(0,16)
    axios.get("http://localhost:3000/contratos/"+ req.params.NIPC_entidade_comunicante)
    .then(resp =>{
        var contrato = resp.data
        res.status(200).render("NIPCPage",{"contrato": contrato, "date": d})
    })
});



router.get('/edit/:id', function(req, res, next) {
  var d = new Date().toISOString().substring(0,16)
  axios.get("http://localhost:3000/compositores/"+ req.params.id)
  .then(resp =>{
    var compositor = resp.data 
    res.status(200).render("compositorFormEditPage",{"compositor": compositor, "date": d})
  })
  .catch(erro=>{  
    res.status(504).render("error",{"error":erro})
  });
});



router.get('/delete/:id', function(req, res, next) {
  var d = new Date().toISOString().substring(0,16)
  axios.delete("http://localhost:3000/compositores/"+ req.params.id)
  .then(resp =>{
    res.redirect('/')
  })
  .catch(erro=>{  
    res.status(505).render("error",{"error":erro})
  });
});
