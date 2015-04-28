var mongoose = require('mongoose');
var Course = mongoose.model('Course');

sendJsonResponse = function(response,status,content){
  response.status(status);
  response.json(content);
};

module.exports.courseCreate = function(request,response){
  sendJsonResponse(response,200,{"status": "course create success"});
};

module.exports.courseInfo = function(request,response){
  sendJsonResponse(response,200,{"status": "course info success"});
};

//used in user as well that is why it is exported later
module.exports.sendJsonResponse = sendJsonResponse;