var Course=function(name,cpd,length){
  this.name = name;
  this.cpd = cpd;
  this.length = length;
};

var listOfCourses = function(){
  this.list = [];
}

//adding a course to the list 
listOfCourses.prototype.add = function(name,cpd,length) {
  this.list.push(new Course(name,cpd,length));
};

module.exports = listOfCourses;