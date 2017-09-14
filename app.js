
var express=require("express");
var path= require("path");

var app=express();
var server=require('http').Server(app);
var io=require("socket.io")(server);

app.use(express.static(path.join(__dirname,"public")));

var port=8888;

io.on('connection',function (socket) {
// emit to send messages.
    socket.emit('message-from-server',{

        greeting:'Hello from Server'
    });

    // on to receive messages.
    socket.on('message-from-client',function (msg) {

        console.log(msg);
    })

    console.log('new connection made');
});

server.listen(port,function () {
    console.log('Listening to port',port);
});