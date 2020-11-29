var express = require('express');
var router = express.Router();

var con=require("../model/DB_Connector");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
con=con.dbConnection();


module.exports = router;
