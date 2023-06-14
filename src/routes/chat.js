var express = require('express');
var router = express.Router();

var chatController = require("../controllers/chatController")

router.post("/ArmazenarMensagem", function (req, res) {
    chatController.enviarMensagem(req, res);
});
router.get("/retornarMensagem", function (req, res) {
    chatController.retornarMensagem(req, res);
});

module.exports = router;