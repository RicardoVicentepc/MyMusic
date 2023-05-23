var express = require('express');
var router = express.Router();

var pessoaController = require("../controllers/pessoaController");

// router.get("/", function (req, res){
//     pessoaController.testar(req, res);
// }); Rota de teste

router.get("/listar", function (req, res) {
    pessoaController.listar(req, res);
});

router.post("/cadastrar", function(req, res){
    pessoaController.cadastrar(req, res);
});

router.post("/autenticar", function(req, res) {
    pessoaController.entrar(req, res)
});

module.exports = router;