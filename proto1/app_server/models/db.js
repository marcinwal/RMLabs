var mongoose = require('mongoose');
var dbURI ='mongodb://localhost/CPD';

//condition for live env
if (process.env.NODE_ENV === 'production'){
  dbURI = process.env.MONGOLAB_URI_CPD;
};

mongoose.connect(dbURI);
//for many connections 
//var dbURILog = 'mongodb://localhost/CPD'
//var logDB = mongoose.createConnection(dbURILog)
// logDB.on ... logDB.close


mongoose.connection.on('connected',function(){
  console.log('Moongose connected to'+dbURI);
});

mongoose.connection.on('error',function(err){
  console.log('Moongose connection error'+err);
});

mongoose.connection.on('disconnected',function(){
  console.log('Moongose disconnected');
});

var gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Moongose disconnected through' + msg);
    callback();
  });
};

//nodemon restarts
process.once('SIGUSR2',function(){
  gracefulShutdown('nodemon restart',function(){
    process.kill(process.pid,'SIGUSR2');
  });
});

//app termination
process.on('SIGINT',function(){
  gracefulShutdown('app termination',function(){
    process.exit(0);
  });
});

//heroku termination
process.on('SIGTERM',function(){
  gracefulShutdown('Heroku app down',function(){
    process.exit(0);
  });
});