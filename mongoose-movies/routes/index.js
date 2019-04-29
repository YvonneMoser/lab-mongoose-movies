var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const celebritiesRouter = require('./celebrities');

router.use('/celebrities', celebritiesRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Celebrity' });
});



module.exports = router;
