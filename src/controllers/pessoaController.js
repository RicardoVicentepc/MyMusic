var pessoaModel = require("../models/pessoaModel");

function listar(req, res) {
    pessoaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum Resultado Encontrado!!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function emailAtualUser(req, res){
    pessoaModel.emailAtualUser()
    .then(function (resultado) {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum Resultado Encontrado!!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!")
    } else {
        pessoaModel.entrar(email, senha)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0])
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha Inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
            ).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobreNome = req.body.sobreNomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!")
    } else if (sobreNome == undefined) {
        res.status(400).send("Seu sobreNome está indefinido!")
    }
    else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinidaa!")
    } else {
        pessoaModel.cadastrar(nome, sobreNome, email, senha)
            .then(function (resultado) {
                res.json(resultado);
            }
            ).catch(function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
    }
}

function editar(req, res) {
    var idPessoa = req.body.idPessoaServer;
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email= req.body.emailServer;
    var senha = req.body.senhaServer;
    pessoaModel.editarPerfil(idPessoa, nome, sobrenome, email,senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}




function Recomendacao(req, res) {
    var email = req.body.emailServer;
    var genero = req.body.generoServer;
    var musica = req.body.musicaServer;
    var desc = req.body.descServer;

    if (email == undefined) {
        res.status(400).send("Seu Email está indefinido!")
    } else if (genero == undefined) {
        res.status(400).send("Seu Genero está indefinido!")
    } else if (musica == undefined) {
        res.status(400).send("Sua Música está indefinida!")
    } else if (desc == undefined) {
        res.status(400).send("Sua Descricao está indefinida!")
    } else {
        pessoaModel.Recomendacao(email, genero, musica, desc)
            .then(function (resultado) {
                if(resultado == false){
                    res.status(500).json(erro.sqlMessage);
                }else
                res.json(resultado);
                                
            }
            ).catch(function (erro) {
                console.log(erro)
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            })
    }
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    Recomendacao,
    emailAtualUser,
    editar,
}