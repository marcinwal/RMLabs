var express = require('express');
var router = express.Router();
var SFsimulator = require('../helpers/SFsimulator');

// router.get('/',function(request,response){
//   response.send(SFsimulator());
// });


//reply for http://localhost:3000/users/1 query
router.get('/:id',function(request,response){
  var id = request.params.id;
  console.log(id);
  response.render('admin',{user: SFsimulator(id)});
});

router.get('/',function(request,response){
  var id = request.params.id;
  response.render('admin',{user: SFsimulator()});
});

module.exports = router;