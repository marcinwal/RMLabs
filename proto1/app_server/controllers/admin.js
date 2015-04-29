var SFsimulator = require('../helpers/SFsimulator');
var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};

//!!!!!!!!!!!!!! to change
//linking for API 
if(process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://myapp.herokuapp.com"
}

module.exports.admin_id = function(request,response){
  var id = request.params.id;
  response.render('admin',{users: SFsimulator(id),title: 'admin page'});
};

module.exports.admin = function(request,response){
 response.render('admin',{users: SFsimulator(),title: 'admin page'});  
}