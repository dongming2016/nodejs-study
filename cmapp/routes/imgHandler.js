var express = require('express');
var router = express.Router();
var fs = require("fs");

//path模块，可以生产相对和绝对路径
var path = require("path");

//获取当前目录绝对路径，这里resolve()不传入参数
var filePath = path.resolve() + '/uploads/imgs/';

router.get('/', function(req, res, next) {
  fs.readdir(filePath, function(err, files) {
    if (err) {
      res.send([]);
      return;
    }
    const result = files.map(function(val) {
        return `/myapp/backend/imgs/${val}`;
    });
    console.log(result);
    res.send(result);
  });  
});

module.exports = router;
