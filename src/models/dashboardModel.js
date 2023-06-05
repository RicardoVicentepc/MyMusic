var database = require("../database/config");


function dadosDashboard() {
    var janeiro = "select count(dtCadastro) as dadosjaneiro from pessoa where dtCadastro >= '2023-01-01' and dtCadastro <= '2023-01-31'"
    var fevereiro = "select count(dtCadastro) as dadosFevereiro from pessoa where dtCadastro >= '2023-02-01' and dtCadastro <= '2023-02-28'"
    var marco = "select count(dtCadastro) as dadosMarco from pessoa where dtCadastro >= '2023-03-01' and dtCadastro <= '2023-03-31'"
    var abril = "select count(dtCadastro) as dadosAbril from pessoa where dtCadastro >= '2023-04-01' and dtCadastro <= '2023-04-30'"
    var maio = "select count(dtCadastro) as dadosMaio from pessoa where dtCadastro >= '2023-05-01' and dtCadastro <= '2023-05-31'"
    var junho = "select count(dtCadastro) as dadosJunho from pessoa where dtCadastro >= '2023-06-01' and dtCadastro <= '2023-06-30'"

    database.executar(janeiro)
        .then(res => {
            var janeiro = res[0].dadosjaneiro
            database.executar(fevereiro)
                .then(res => {
                    var fevereiro = res[0].dadosFevereiro
                    database.executar(marco)
                        .then(res => {
                            var marco = res[0].dadosMarco
                            database.executar(abril)
                                .then(res => {
                                    var abril = res[0].dadosAbril
                                    database.executar(maio)
                                        .then(res => {
                                            var maio = res[0].dadosMaio
                                            database.executar(junho)
                                                .then(res => {
                                                    var junho = res[0].dadosJunho
                                                    return janeiro, fevereiro, marco, abril, maio, junho 
                                                })
                                        })
                                })
                        })
                })
        })

}

module.exports = {
    dadosDashboard
}