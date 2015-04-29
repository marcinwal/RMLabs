var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course');
var userCtrl = require('../controllers/user');


router.post('/course',courseCtrl.courseCreate);
router.get('/course/:name',courseCtrl.courseInfo)
router.get('/course/:courseid',courseCtrl.coursesReadOne);
router.delete('/course/:courseid',courseCtrl.courseDelete);
router.post('/user',userCtrl.userCreate);
router.put('/user/:userid',userCtrl.usersAddCourse);
router.get('/user/:userid',userCtrl.usersReadOne);

module.exports = router;