var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course');
var userCtrl = require('../controllers/user');


router.get('/course/:name',courseCtrl.courseCreate);
router.get('/user/:name',userCtrl.userCreate);

module.exports = router;