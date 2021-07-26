var express = require('express');
var theRouter = express.Router();
let config = require('../DBConfig');
var mongoose = require('mongoose');

theRouter.get('/', function(req, res, next) {
    //MongoDB
    var connectionString = config;
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log('Connected to DB'))
        .catch((error) => console.log(err));

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error: '));

    res.send('Get request recieved 2')
});

module.exports = theRouter;