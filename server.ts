import express from 'express';
import { DataStore } from './data/data';
const app = express();

// console.log(JSON.parse(JSON.stringify(DataStore.tours)));

app.get('/', (req, res, next) => {
  res.send('Tour Booking API');
});

app.get('/tours', (req, res, next) => {
  res.json(DataStore.tours);
});

app.post('/tours', (req, res, next) => {
  res.send('Add a new tour...');
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server run at port: ${port}`);
});
