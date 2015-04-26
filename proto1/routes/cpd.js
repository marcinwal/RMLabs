var express = require('express');
var router = express.Router();

var ctrlCPD = require('../app_server/controllers/CPD');

router.get('/',ctrlCPD.cpd);

module.exports = router;