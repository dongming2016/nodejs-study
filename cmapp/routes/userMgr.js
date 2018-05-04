var express = require('express');
var router = express.Router();
var validateUserInfo = require('../business/userBusiness');

/* GET home page. */
router.post('/register', function(req, res, next) {
    res.send(validateUserInfo(req.body));
});

module.exports = router;
