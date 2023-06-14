const chatModel = require("../models/chatModel");

function enviarMensagem(req, res){
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;

    if(email == undefined){
        res.status(400).send("Seu email está indefinido!")

    }else if(mensagem == undefined){
        res.status(400).send("Sua Mensagem está indefinido!")

    }else{
        chatModel.enviarMensagem(mensagem, email)
            .then(function (resposta){
                res.json(resposta)
            }
            ).catch(function (error){
                console.log(error)
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            })
    }


}
function retornarMensagem(req, res){
    chatModel.retornarMensagem()
        .then( function (resultado){
            if(resultado.length > 0)
                res.status(200).json(resultado);
            else
                res.status(204).json("Nenhum resultado encontrado.");                
        }).catch(function (erro){
            console.log(erro)
            console.log("Erro ao realizar query")
            res.status(500).json("erro ao buscar resultado.");                
        });
}
module.exports = {
    enviarMensagem,
    retornarMensagem
}