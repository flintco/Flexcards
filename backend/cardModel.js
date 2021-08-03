var mongoose = require('mongoose');

const schema = new mongoose.Schema({name: 'string', front: 'string', back: 'string', hint: 'string'}, {collection: 'Card-Deck'});

module.exports = mongoose.model('Card-Deck', schema);