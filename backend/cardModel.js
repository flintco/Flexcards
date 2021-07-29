var mongoose = require('mongoose');

const schema = new mongoose.Schema({name: 'string', size: 'string'}, {collection: 'Card-Deck'});

module.exports = mongoose.model('Card-Deck', schema);