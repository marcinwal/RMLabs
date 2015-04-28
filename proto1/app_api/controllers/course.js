var mongoose = require('mongoose');
var Course = mongoose.model('Course');

module.exports.sendJsonResponse = function(response,status,content){
  response.status(status);
  response.json(content);
};

module.exports.courseCreate = function(request,response){
  sendJsonResponse(response,200,{"status": "success"});
};

