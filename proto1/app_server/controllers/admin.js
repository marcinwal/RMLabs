var SFsimulator = require('../../helpers/SFsimulator');

module.exports.admin_id = function(request,response){
  var id = request.params.id;
  console.log(id);
  response.render('admin',{user: SFsimulator(id),title: 'admin page'});
};

module.exports.admin = function(request,response){
 response.render('admin',{user: SFsimulator(),title: 'admin page'});  
}