var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course');
var userCtrl = require('../controllers/user');


router.post('/course',courseCtrl.courseCreate);
router.get('/course/:name',courseCtrl.courseInfo)
router.get('/course/readone/:courseid',courseCtrl.coursesReadOne);
router.post('/user',userCtrl.userCreate);
router.get('/user/:userid/:courseid/:cpdpoints/:cpddate',userCtrl.usersAddCourse);
router.get('/user/:email',userCtrl.userInfo);
router.get('/user/readone/:userid',userCtrl.usersReadOne);

module.exports = router;