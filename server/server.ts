const path = require('path');
const express = require('express');
import { Request, Response } from 'express';
const cors = require('cors');

const apiRouter = require('./routes/apiRouter');

const PORT = 3434;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.use((err: Error, req: Request, res: Response) => {  
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log('error log:', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server is up on PORT ' + PORT);
});