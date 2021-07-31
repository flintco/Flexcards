var express = require("express");
var cors = require("cors");
var routerForFirst = require('./routes/nextCard');
var newCardRouter = require('./routes/newCard');

var app = express();

app.use(cors());
app.use('/nextCard', routerForFirst);
app.use('/newCard', newCardRouter);


app.get('/', function(req, res, next) {
  res.send('Get request recieved')
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});