module.exports.courseInfo = function(request,response){
  response.render('course-info',{title: 'Course info',
    courseDetails:{
      rating: 3,
      address: '120 River road',
      levels: [2,5,7],
      dates: ['april','september','december'],
      location: [51.444034,-0.2913375,13]
    }});
};

module.exports.courseNew = function(request,response){
  response.render('course-new',{title: 'Adding new course'
  });
};