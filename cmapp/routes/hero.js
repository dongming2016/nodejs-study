const express = require('express');
const router = express.Router();
const heroBusiness = require('../business/heroBusiness');

router.get('/', function(req, res, next) {
  heroBusiness.getAll().then(data => res.send(data));
});

router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send({id: 'alarm'});
  });

router.post('/', function(req, res, next) {
  heroBusiness.saveHero(req.body).then((data) => {
    res.send(data);
  });
  
})

router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);
  heroBusiness.deleteHero(req.params.id);
  res.send(null)
})

router.put('/', function(req, res, next) {
  console.log(req.body);
  res.send(null)
})

router.get('/search', function(req, res, next) {
  console.log(req.query);
  res.send(null)
})

module.exports = router;