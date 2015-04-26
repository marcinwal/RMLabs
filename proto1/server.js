var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//router
var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');


//server set-up
app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(expressLayouts);


//setting views and port
app.set('views',path.join(__dirname,'app_server','views'));
app.set('port',(process.env.PORT || 3000));

//setting path for static files
app.use(express.static(__dirname + '/public'))
  .use(cookieParser());

//sends to router index
app.use('/',index);
app.use('/users',users);
app.use('/admin',admin);

server.listen(app.get('port'),function(){
  console.log('server is running on port:' + app.get('port'));
});

module.exports = server;