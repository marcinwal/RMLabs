var mongoose = require('mongoose');
var dbURI ='mongodb://localhost/CPD';
mongoose.connect(dbURI);
// if(process.env.NODE_ENV === 'production'){
//   dbURL = process.env.MONGOLAB_URI_CPD;
// }

mongoose.connection.on('connected',function(){
  console.log('Moongose connected to'+dbURI);
});

mongoose.connection.on('error',function(err){
  console.log('Moongose connection error'+err);
});

mongoose.connection.on('disconnected',function(){
  console.log('Moongose disconnected');
});