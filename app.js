process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;
var app = express();

var server = app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
const io = require('socket.io')(server); // configuração http e web socket


var pessoaRouter = require("./src/routes/pessoa");
var dashRouter = require("./src/routes/dashboard");
var chatRouter = require("./src/routes/chat");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors());

app.use("/pessoa", pessoaRouter);
app.use("/dashboard", dashRouter);
app.use('/chat', chatRouter);


let messages = [];

//forma de conexão
io.on('connection', socket => {
    console.log(`Socket Conectado ${socket.id}`);
    socket.emit('previousMessages', messages)
    socket.on('sendMessage', data =>{
        console.log(data)
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data); // enviar msg pra todos que estão conectados
    });
});
