const express = require('express');

// app setup
const app = express();

const server = app.listen(4000, () => {
  console.log('Listening to requests on port 4000');
});