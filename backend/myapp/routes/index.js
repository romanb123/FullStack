var express = require('express');
var router = express.Router();
var sql = require('../database/database');

/* GET home page. */
router.get('/football', function (req, res, next) {
  sql.query("SELECT * FROM games WHERE category = 'Footbal'", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.get('/basketball', function (req, res, next) {
  sql.query("SELECT * FROM games WHERE category = 'Basketball'", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.get('/game/:id', function (req, res, next) {
  sql.query(`SELECT * FROM games WHERE id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



router.post('/comments/:id', function (req, res, next) {
  var comment = `INSERT INTO comments ( name, body, game_id) VALUES ('${req.body.name}', '${req.body.body}','${req.params.id}')`;
  sql.query(comment, function (err, result) {
    if (err) throw err;
    console.log(req.body);
    res.send('news');
  });
});


router.get('/comments/:id', function (req, res, next) {
  sql.query(`SELECT * FROM comments WHERE game_id = '${req.params.id}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});



module.exports = router;
