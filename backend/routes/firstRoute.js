var express = require('express');
var theRouter = express.Router();
let connectionString = require('../DBConfig');
var mongoose = require('mongoose');
var cardModel = require('../cardModel');

theRouter.get('/', function(req, res, next) {
    //MongoDB
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log('Connected to DB'))
        .catch((error) => console.log(err));
    var db = mongoose.connection;
    db.on('error', () => console.error('Connection error: '));
    db.once('open', () => {
        console.log('Connected')
    })

    /*cardModel.findOne({size: "small"}, function(err, person) {
        if (err) return handleError(err);
        console.log(person);
    }); */

    cardModel.create({ size: 'very large' }, function (err, medium) {
        if (err) return handleError(err);
        // saved!
    }); 

    res.send('Get request recieved 2')
});

module.exports = theRouter;