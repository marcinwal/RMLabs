var mongoose = require('mongoose');
var User = mongoose.model('User');
var courseCtrl = require('./course');


module.exports.userCreate = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user created"});
};

module.exports.userInfo = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user info"});  
}


