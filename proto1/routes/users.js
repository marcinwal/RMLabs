var express = require('express');
var router = express.Router();
var SFsimulator = require('../helpers/SFsimulator');

router.get('/',function(request,response){
  response.send(SFsimulator());
});

module.exports = router;