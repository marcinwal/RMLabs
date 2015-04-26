var express = require('express');
var router = express.Router();
var ctrlAbout = require('../app_server/controllers/about');

router.get('/',ctrlAbout.about);

module.exports = router;
