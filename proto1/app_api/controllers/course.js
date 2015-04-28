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

module.exports.courseUpdate = function(request,response){
  sendJsonResponse(response,200,{"status": "course update success"});
};

module.exports.courseDelete = function(request,response){
  sendJsonResponse(response,200,{"status": "course deletion success"});
};


module.exports.coursesReadOne = function(request,response){
  if(request.params && request.params.courseid){
    Course
      .findById(request.params.courseid)
      .exec(function(err,course){
        if (!course) {
          sendJsonResponse(response,404,{
            'message': "course not found"
          });
        } else if(err){
          sendJsonResponse(response,404,err);
        }
        sendJsonResponse(response,200,course);
      });
  }else{
    sendJsonResponse(response,404,{
      'message': "No courseid in request"
    });
  }
};


//used in user as well that is why it is exported later
//should be moved to helpers 
module.exports.sendJsonResponse = sendJsonResponse;