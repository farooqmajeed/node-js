const express = require('express');

const app = express();

// we have four methods 

// app.get() fetch data from server
// app.post() send data to server
// app.put() update data to server
// app.delete() delete data from server
// app.patch() update data to server

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
  res.send((JSON.stringify([1,2,4])));
});

// for the  specific id of course
app.get('/api/courses/:id', (req, res) => {
  res,send(req.params.id);
});

// for specific params in url
app.get('/api/post/:year/:month', (req, res) => {
  res,send(req.params.id); // return send { year: '2023', month: '1',}
});

app.listen(3000, () => {
console.log('Server');
});