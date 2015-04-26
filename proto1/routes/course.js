var express = require('express');
var router = express.Router();
var ctrlCourse = require('../app_server/controllers/courseInfo');

router.get('/',ctrlCourse.courseInfo);

module.exports = router;
