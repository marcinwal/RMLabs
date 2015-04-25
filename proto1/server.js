var express = require('express');
var SFsimulator = require('./helpers/SFsimulator');
var app = express();
var server = require('http').createServer(app);


app.get('/',function(request,response){
  response.send("hello");
});

app.get('/:user',function(request,response){
  response.send(user);
});

server.listen(3000,function(){
  console.log('server is running on port 3000');
});

module.exports = server;