var express = require('express');
var router = express.Router();

//controllers pages
var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about');
var ctrlAdmin = require('../controllers/admin');
var ctrlCourse = require('../controllers/courseInfo');
var ctrlCPD = require('../controllers/CPD');


//routes for the server
router.get('/',ctrlMain.index);
router.get('/about',ctrlAbout.about);
router.get('/admin',ctrlAdmin.admin);
router.get('/admin/:id',ctrlAdmin.admin_id);
router.get('/course',ctrlCourse.courseInfo);
router.get('/course/new',ctrlCourse.courseNew);
router.get('/course/:courseid',ctrlCourse.courseInfo);
router.get('/cpd',ctrlCPD.cpd);

module.exports = router;
