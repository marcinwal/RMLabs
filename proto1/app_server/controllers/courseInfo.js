var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};

//!!!!!!!!!!!!!! to change
if(process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://myapp.herokuapp.com"
}


var renderStaticCourseInfopage = function(request,response){
  response.render('course-info',{title: 'Course info',
    courseDetails:{
      name: 'Best Lawyer',
      rating: 3,
      address: '120 River road',
      levels: [2,5,7],
      dates: ['april','september','november','december'],
      location: [51.465034,-0.2913375],
      insertDate: '2015-02-10',
      startDate: '2015-12-24',
      endDate: '2015-12-31'
    }});
};

var renderCourseNewPage = function(request,response){
  response.render('course-new',{title: 'Adding new course'
  });  
};

module.exports.courseInfo = function(request,response){
  renderStaticCourseInfopage(request,response);
};

module.exports.courseNew = function(request,response){
  renderCourseNewPage(request,response);
};