var express = require('express');
var router = express.Router();
var multer = require('multer');

var fs = require("fs");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/imgs/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
});
var upload = multer({ storage});

router.post('/pic', upload.single('photos'), function(req, res, next) {
  res.send(null);
});

module.exports = router;
