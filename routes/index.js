var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
    var tweets = tweetBank.list();
    res.render('index', {
        tweets: tweets,
        showForm: true
    });
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true } );
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: list, showForm: true } );
});



// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile('../public/stylesheets/style.css');
// });

module.exports = router;