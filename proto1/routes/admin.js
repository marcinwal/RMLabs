var express = require('express');
var router = express.Router();
var SFsimulator = require('../helpers/SFsimulator');
var ctrlAdmin = require('../app_server/controllers/admin');
// router.get('/',function(request,response){
//   response.send(SFsimulator());
// });


//reply for http://localhost:3000/users/1 query
router.get('/:id',ctrlAdmin.admin_id);
router.get('/',ctrlAdmin.admin);

module.exports = router;