var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

app.get('/', function(req, res, next) {
  res.send('Get request recieved')
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//Setup Routes
//var indexRouter = require('./routes/flipCard');
//app.use('/', indexRouter);