var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

require('./app_api/models/db'); //link to mongoose

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//routes for api and the server
var routes = require('./app_server/routes/index');
var routesAPi = require('./app_api/routes/index');




//server set-up
app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//setting views and port
app.set('views',path.join(__dirname,'app_server','views'));
app.set('port',(process.env.PORT || 3000));

//setting path for static files
app.use(express.static(__dirname + '/public'))
  .use(cookieParser());

//sends to router index -- midlware
app.use('/',routes);
app.use('/api',routesAPi);

server.listen(app.get('port'),function(){
  console.log('server is running on port:' + app.get('port'));
});

module.exports = server;