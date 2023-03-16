var express = require('express');
var router = express.Router();
const questions = [
  "3, 1, 4, 1, 5",
  "1, 1, 2, 3, 5", 
  "1, 4, 9, 16, 25", 
  "2, 3, 5, 7, 11", 
  "1, 2, 4, 8, 16" 
];
const answers = [9, 8, 36, 13, 32];
/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.info) {
    var info = {score: 0, step: 0};
    req.session.info = info;
  }
  res.render('index', { title: 'Express Number Quiz Lab', score: req.session.info.score, pattern: questions[req.session.info.step], step: req.session.info.step });
});
/* POST answer. */
router.post('/', function(req, res, next) {
  if(Number(req.body.answer) == answers[req.session.info.step]) req.session.info.score += 1;
  req.session.info.step++;
  res.redirect('/');
});
module.exports = router;
