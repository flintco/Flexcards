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
    db.on('error', () => console.error('Connection error: '));
    db.once('open', () => {
        console.log('Connected')
    })

    /*var Schema = mongoose.Schema;
    
    var SomeModelSchema = new Schema({
        a_string: String,
        a_date: Date
    }); */

    const schema = new mongoose.Schema({name: 'string', size: 'string'});

    const Tank = mongoose.model('Card-Deck', schema);

    Tank.create({ size: 'small' }, function (err, small) {
        if (err) return handleError(err);
        // saved!
    });

    //const small = new Tank({size: 'small'});

    /*small.save(function (err) {
        if (err) return handleError(err)
    });*/

    res.send('Get request recieved 2')
});

module.exports = theRouter;