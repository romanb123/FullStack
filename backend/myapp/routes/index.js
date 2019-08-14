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



router.get('/news', function (req, res, next) {
  sql.query("SELECT * FROM articles WHERE category = 'news'", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.get('/article/:id', function (req, res, next) {
  sql.query(`SELECT * FROM articles WHERE id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.post('/comments/:id', function (req, res, next) {
  var comment = `INSERT INTO comments ( title, body, article_id) VALUES ('${req.body.title}', '${req.body.body}','${req.params.id}')`;
  sql.query(comment, function (err, result) {
    if (err) throw err;
    console.log(req.body);
    res.send('news');
  });
});

router.post('/deletecomment', function (req, res, next) {
  var commentdeleted = `DELETE FROM comments WHERE id = '${req.body.id}'`;
  sql.query(commentdeleted, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  console.log(req.body)
  res.send('news')
});


router.get('/comments/:id', function (req, res, next) {
  sql.query(`SELECT * FROM comments WHERE article_id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



module.exports = router;
