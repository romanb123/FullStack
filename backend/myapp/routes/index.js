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

// router.post('sports/comments/1', function (req, res, next) {
//   // var sql = `INSERT INTO comments ( title, body, article_id) VALUES ('${req.params.title}', '${req.params.body}','${req.params.id}')`;
//   // con.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("1 record inserted");

//   // });
//   res.send("gotit");
// });
router.post('/sports/comments/:id', function (req, res, next) {
  var comment = `INSERT INTO comments ( title, body, article_id) VALUES ('${req.body.title}', '${req.body.body}','${req.params.id}')`;
  sql.query(comment, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send('news');
  });
});



module.exports = router;
