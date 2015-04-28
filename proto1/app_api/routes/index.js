var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course');


router.get('/course/:name',courseCtrl.courseCreate);
module.exports = router;