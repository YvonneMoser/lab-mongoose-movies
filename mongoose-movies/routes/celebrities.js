var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Celebrity = require(`./../models/celebrity`);

router.get('/', (req, res) => {
  Celebrity.find()
    .then((celeb) => {
      res.render('celebrities/index', {celeb});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/new', (req, res) => {
  console.log("test")
  res.render('celebrities/new');
});


router.get('/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      res.render(`celebrities/shows`, {data});
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post(`/new`, (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({name, occupation, catchPhrase});
  newCeleb.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
});


router.post(`/:_id/delete`, (req, res) => {
  const {_id} = req.params;
  Celebrity.findByIdAndRemove({_id})
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;