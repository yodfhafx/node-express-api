import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
  res.send('Tour Booking API');
});

app.get('/tours', (req, res, next) => {
  res.send('Get a list of tour...');
});

app.post('/tours', (req, res, next) => {
  res.send('Add a new tour...');
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server run at port: ${port}`);
});
