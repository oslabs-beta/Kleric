const path = require('path');
const express = require('express');
const cors = require('cors');

const apiRouter = require('./routes/apiRouter');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.listen(PORT, () => {
  console.log('Server is up on PORT ' + PORT);
});