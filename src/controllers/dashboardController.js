var dashModel = require("../models/dashboardModel");

function dadosDashboard(res){
    dashModel.dadosDashboard()
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
    dadosDashboard
}