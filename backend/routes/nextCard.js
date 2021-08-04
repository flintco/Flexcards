var express = require('express');
var theRouter = express.Router();
let connectionString = require('../DBConfig');
var mongoose = require('mongoose');
var cardModel = require('../cardModel');

theRouter.get('/', function(req, res, next) {
    //MongoDB connection
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log('Connected to DB'))
        .catch((error) => console.log(err));
    var db = mongoose.connection;
    db.on('error', () => console.error('Connection error: '));
    db.once('open', () => {
        console.log('Connected')
    })

    //Count number of documents in collection
    var docs = 0;
    cardModel.countDocuments(
        function(err, numDocuments) {
            if (err) return handleError(err);
            docs = numDocuments;
            //console.log(numDocuments);

            //Get a random number based on number of documents in collection
            var rand = Math.floor(Math.random() * docs);
            //console.log(rand);

            //Skip by random number to get a random card
            cardModel.findOne().skip(rand).exec(
                function(err, card) {
                if (err) return handleError(err);
                //console.log(card);
                res.send(card)
            });
    });

    //db.disconnect();

    //res.send(card)
});

module.exports = theRouter;