module.exports.courseInfo = function(request,response){
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

module.exports.courseNew = function(request,response){
  response.render('course-new',{title: 'Adding new course'
  });
};