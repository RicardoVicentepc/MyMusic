var express = require('express');
var router = express.Router();
var dashController = require("../controllers/dashboardController")

router.get("/dadosJaneiro", function (req, res) {
    dashController.dadosJaneiro(req, res);
});
router.get("/dadosFevereiro", function (req, res) {
    dashController.dadosFevereiro(req, res);
});
router.get("/dadosMarco", function (req, res) {
    dashController.dadosMarco(req, res);
});
router.get("/dadosAbril", function (req, res) {
    dashController.dadosAbril(req, res);
});
router.get("/dadosMaio", function (req, res) {
    dashController.dadosMaio(req, res);
});
router.get("/dadosJunho", function (req, res) {
    dashController.dadosJunho(req, res);
});
router.get("/dadosRecomendacao", function (req, res) {
    dashController.dadosRecomendacao(req, res);
});
router.get("/dadosRecomendacaoCadastrados", function (req, res) {
    dashController.dadosRecomendacaoCadastrados(req, res);
});
router.get("/dadosRecomendacoesNaoCadastrados", function (req, res) {
    dashController.dadosRecomendacaoNaoCadastrados(req, res);
});

router.delete("/deletar/:idAvaliacao", function (req, res){
    dashController.deletarAvaliacao(req, res);
});


module.exports = router;