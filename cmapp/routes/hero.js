var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send([
        {id: 'alarm',
        name: 'trump'},
        {id: 'alarm1',
        name: 'bush'},
        {id: 'alarm21',
        name: 'dongbo'},
        {id: 'alarm231',
        name: 'smith'},
        {id: 'a234',
        name: 'bob'},
    ]);
});

module.exports = router;
