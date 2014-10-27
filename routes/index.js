var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {title: 'GearWorks'});
});

module.exports = router;