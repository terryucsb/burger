
//routing for my app and the logic of each route.
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// route defined for the root of the app
// GET method redirects user to /burgers URI
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// route defined for the /burgers URI
// GET method - selectAll callback function
router.get('/burgers', function (req, res) {
  burger.all(function (data) {
    var hbsObject = { burgers: data };
  //  console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// route defined for the /burgers/create URI
router.post('/burgers/create', function (req, res) {
  
  var s = "'" + req.body.burger_name + "'";
  console.log(s);

  burger.create(['burger_name'], s, function () {
    res.redirect('/burgers');
  });
});

// route defined for the /burgers/update/[params] URI

router.put('/burgers/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  
  console.log('condition', condition);

  burger.update({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;