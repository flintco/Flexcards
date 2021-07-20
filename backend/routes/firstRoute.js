var express = require('express');
var theRouter = express.Router();

theRouter.get('/', function(req, res, next) {
    res.send('Get request recieved 2')
});

module.exports = theRouter;