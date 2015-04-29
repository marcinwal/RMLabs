var mongoose = require('mongoose');
var User = mongoose.model('User');
var courseCtrl = require('./course');


module.exports.userCreate = function(request,response){
  User.create({
    name: request.body.name,
    surname: request.body.surname,
    address: request.body.address,
    dateOfBirth: request.body.dof,
    pass: request.body.pass,
    email: request.body.email,
  },function(error,user){
    if(error){
      courseCtrl.sendJsonResponse(response,404,error);
    } else{
      courseCtrl.sendJsonResponse(response,201,user);
    }
   }); 
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

//todo

module.exports.userUpdateOne = function(request,response){

};

module.exports.usersAddCourse = function(request,response){
  var userid = request.params.userid;
  var courseid = request.body.courseid;
  var cpddate = request.body.cpddate;
  var cpdpoints = request.body.cpdpoints;
  if(userid && courseid && cpddate && cpdpoints){
    User
        .findById(userid)
        .select('CPD CPDdates courses')
        .exec(function(error,user){
          if(error){
            courseCtrl.sendJsonResponse(response,404,error)
          }else
          {
            user.CPD.push(cpdpoints);
            user.CPDdates.push(cpddate);
            user.courses.push(courseid);
            user.save(function(error,user){
              if(error){
                courseCtrl.sendJsonResponse(response,404,error);  
              }else
              {
                courseCtrl.sendJsonResponse(response,200,{"message":"CPD updated"});        
              }
            });
            
          }
        });
  }else{
    courseCtrl.sendJsonResponse(response,404,{"message":"params are missing"});
  }
};
