var express = require("express");
var app = express();

//Setup Routes
//var indexRouter = require('./routes/flipCard');
//app.use('/', indexRouter);

app.get('/', function(req, res, next) {
  res.send('Get request recieved')
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});