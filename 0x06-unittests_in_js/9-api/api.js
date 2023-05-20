const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  // res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  if (isNaN(id)) {
    res.statusCode = 404;
    // res.send('Not a number');
  } else {
    res.statusCode = 200;
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
