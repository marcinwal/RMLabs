var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course');
var userCtrl = require('../controllers/user');


router.post('/course/:name',courseCtrl.courseCreate);
router.get('/course/:name',courseCtrl.courseInfo)
router.post('/user/:email',userCtrl.userCreate);
router.get('/user/:email',userCtrl.userInfo);

module.exports = router;