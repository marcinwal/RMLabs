var express = require('express');
var router = express.Router();

router.get('/',function(request,response){
  response.send('admin hit');
});

module.exports = router;