var express = require('express');
var router = express.Router();

var pessoaController = require("../controllers/pessoaController");

router.get("/listar", function (req, res) {
    pessoaController.listar(req, res);
});
// router.get("/todosDados", function (req, res) {
//     pessoaController.todosdadosuser(req, res);
// });
router.get("/emailAtual", function (req, res) {
    pessoaController.emailAtualUser(req, res);
});

router.post("/cadastrar", function (req, res) {
    pessoaController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    pessoaController.entrar(req, res)
});
router.post("/Recomendar", function (req, res) {
    pessoaController.Recomendacao(req, res)
});
router.put("/Editar/:idPessoa", function (req, res) {
    pessoaController.editar(req, res)
});

module.exports = router;