var express = require('express');
var stockAppRouter = express.Router();

stockAppRouter.get('/', function(req, res) {
    res.render('index');
});

module.exports = stockAppRouter;
