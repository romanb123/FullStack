var express = require('express');
var router = express.Router();
var sql = require('../database/database');

/* GET home page. */
router.get('/sport', function (req, res, next) {
  sql.query("SELECT * FROM articles WHERE category = 'sport'", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post('/sport', function (req, res, next) {
  res.send('sport');
});

router.get('/news', function (req, res, next) {
  sql.query("SELECT * FROM articles WHERE category = 'news'", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post('/news', function (req, res, next) {
  res.send('news');
});

router.get('/news/:id', function (req, res, next) {
  sql.query(`SELECT * FROM articles WHERE id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.get('/sport/:id', function (req, res, next) {
  sql.query(`SELECT * FROM articles WHERE id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


module.exports = router;
