const dashModel = require("../models/dashboardModel");

function dadosJaneiro(req, res){
    dashModel.dadosJaneiro()
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


function dadosFevereiro(req, res){
    dashModel.dadosFevereiro()
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


function dadosMarco(req, res){
    dashModel.dadosMarco()
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


function dadosMaio(req, res){
    dashModel.dadosMaio()
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

function dadosJunho(req, res){
    dashModel.dadosJunho()
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

function dadosAbril(req, res){
    dashModel.dadosAbril()
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
function dadosRecomendacao(req, res){
    dashModel.dadosRecomendacao()
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
function dadosRecomendacaoCadastrados(req, res){
    dashModel.dadosRecomendacaoCadastrados()
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
function dadosRecomendacaoNaoCadastrados(req, res){
    dashModel.dadosRecomendacaoNaoCadastrados()
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
function deletarAvaliacao(req, res){
    var idAvaliacao = req.params.idAvaliacao;

    dashModel.deletarAvaliacao(idAvaliacao)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro)
                console.log("Erro ao deletar : " + erro.sqlMessage)
                res.status(500).json(erro.sqlMessage)
            }
        )
}
module.exports = {
    dadosAbril,
    dadosFevereiro,
    dadosJaneiro,
    dadosJunho,
    dadosMaio,
    dadosMarco,
    dadosRecomendacao,
    dadosRecomendacaoCadastrados,
    dadosRecomendacaoNaoCadastrados,
    deletarAvaliacao
}