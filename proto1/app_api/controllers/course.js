var mongoose = require('mongoose');
var Course = mongoose.model('Course');

sendJsonResponse = function(response,status,content){
  response.status(status);
  response.json(content);
};

module.exports.courseCreate = function(request,response){
  // console.log(request);
  Course.create({
    name: request.body.name,
    address: request.body.address,
    levels: request.body.levels,
    location: [parseFloat(request.body.lng),parseFloat(request.body.lat)],
    startDate: request.body.startdate,
    endDate: request.body.enddate
  },function(error,course){
    if(error){
      sendJsonResponse(response,404,error);
    }else{
      sendJsonResponse(response,201,course);
    }
  });
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