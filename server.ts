import express from 'express';
const app = express();

import * as bodyparser from 'body-parser';
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: true});

import { DataStore } from './data/data';
import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';
import { CustomRequestHandler } from './model/express';

// console.log(JSON.parse(JSON.stringify(DataStore.tours)));
import morgan from 'morgan';
const logger = morgan('dev');

app.use(logger);

const authenticator: CustomRequestHandler = (req, res, next) => {
  const username = "Marvel";
  req.user = username;
  next();
};

app.get('/', (req, res, next) => {
  res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.patch('/tours/:id', jsonParser, apiUpdateTour);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server run at port: ${port}`);
});
