var express = require('express');
var SFsimulator = require('./helpers/SFsimulator');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

//router
var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');


//server set-up
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(expressLayouts);





app.set('views',path.join(__dirname,'app_server','views'));
app.set('port',(process.env.PORT || 3000));

//sends to router index
app.use('/',index);

// app.get('/',function(request,response){
//   response.send("hello");
// });

// app.get('/:user',function(request,response){
//   response.send(user);
// });

server.listen(3000,function(){
  console.log('server is running on port 3000');
});

module.exports = server;