var express = require('express');
var router = express.Router();
var ctrlMain = require('../app_server/controllers/main');


router.get('/',ctrlMain.index);

module.exports = router; 