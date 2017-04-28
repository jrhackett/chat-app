var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;
var io = require('socket.io')(http);
var config = require("./config.js");
var Session = require('express-session');

app.use(express.static(__dirname + '/app'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    if(msg.length > 0) {
      io.emit('chat message', msg.substring(0, 1000));
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});