const express = require('express');
const app = express();

app.use(express.static('../frontend'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/test', (req, res) => {
  res.send('Hello test!');
  console.log('Smd asks for test');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));