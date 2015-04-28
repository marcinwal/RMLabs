var mongoose = require('mongoose');
var User = mongoose.model('User');
var courseCtrl = require('./course');


module.exports.userCreate = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user created"});
};

module.exports.userInfo = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user info"});  
};

module.exports.userUpdate = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user deleted"});
};

module.exports.userDelete = function(request,response){
  courseCtrl.sendJsonResponse(response,200,{"status":"user updated"});
};

module.exports.usersReadOne = function(request,response){
  if(request.params && request.params.userid){
    User
      .findById(request.params.userid)
      .exec(function(err,user){
        if (!user) {
          courseCtrl.sendJsonResponse(response,404,{
            'message': "user not found"
          });
        } else if(err){
          courseCtrl.sendJsonResponse(response,404,err);
        }
        courseCtrl.sendJsonResponse(response,200,user);
      });
  }else{
    courseCtrl.sendJsonResponse(response,404,{
      'message': "No userid in request"
    });
  }
};