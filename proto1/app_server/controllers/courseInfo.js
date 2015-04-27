module.exports.courseInfo = function(request,response){
  response.render('course-info',{title: 'Course info'});
};

module.exports.courseNew = function(request,response){
  response.render('course-new',{title: 'Adding new course'});
};