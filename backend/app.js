const express = require("express");

const PORT = process.env.PORT || 3001;

var indexRouter = require('./routes/flipCard');

const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});