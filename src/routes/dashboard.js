var express = require('express');
var router = express.Router();


router.get("/dadosDashboard", function (req, res) {
    pessoaController.dadosDashboard(req, res);
});


module.exports = router;