var express = require('express');
var theRouter = express.Router();
let connectionString = require('../DBConfig');
var mongoose = require('mongoose');
var schema = require('../cardModel');

theRouter.post('/', function(req, res) {
     
    //Receive JSON from POST request and parse
    var cardFront = JSON.stringify(req.body.front);
    var cardBack = JSON.stringify(req.body.back);
    var cardHint = JSON.stringify(req.body.hint); 
    //var cardDeck = JSON.stringify(req.body.deck);
    
    //Setup MongoDB connection
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log('Connected to DB'))
        .catch((error) => console.log(err));
    var db = mongoose.connection;
    db.on('error', () => console.error('Connection error: '));
    db.once('open', () => {
        console.log('Connected')
    })

    //Add card to specified deck
    var cardDeck = 'History';
    cardModel = mongoose.model(cardDeck, schema);
    cardModel.create({ front: cardFront, back: cardBack, hint: cardHint}, function (err, medium) {
        if (err) return handleError(err);
        // saved!
    });

    //Close DB connection

    res.send('New Card route successful')
});

module.exports = theRouter;


