const path = require('path');
const express = require('express');
import { Request, Response, NextFunction } from 'express';

const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send('Hello World!');
}); 

app.listen(PORT, () => {
  console.log('Server is up on PORT ' + PORT);
});