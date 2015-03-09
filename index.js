var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
     io.emit('chat message', msg);
  });
  socket.on('attack', function(num){
     io.emit('attack', num);
  });
   socket.on('heal', function(num){
     io.emit('heal', num);
  });
   socket.on('attack2', function(num){
     io.emit('attack2', num);
  });
    socket.on('attack5', function(num){
     io.emit('attack5', num);
  });
      socket.on('attack6', function(num){
     io.emit('attack6', num);
  });
   socket.on('heal2', function(num){
     io.emit('heal2', num);
  });
    socket.on('play', function(){
     io.emit('play');
  });
     socket.on('redplayer', function(){
     io.emit('redplayer');
  });
      socket.on('blueplayer', function(){
     io.emit('blueplayer');
  });
       socket.on('greenplayer', function(){
     io.emit('greenplayer');
  });
     socket.on('chatcontrol', function(){
     io.emit('chatcontrol');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});