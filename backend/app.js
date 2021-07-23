var express = require("express");
var cors = require("cors");
var routerForFirst = require('./routes/firstRoute');

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dbUser:password@cluster0.00vzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connected to DB'))
  .catch((error) => console.log(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

var app = express();

app.use(cors());
app.use('', routerForFirst);

app.get('/', function(req, res, next) {
  res.send('Get request recieved')
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});