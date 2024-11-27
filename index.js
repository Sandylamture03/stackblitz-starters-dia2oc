const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }
  res.send('Number is ' + result);
});

app.get('/odd-even', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  res.send('number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is Logged In';
  } else {
    result = 'user is not Logged In';
  }
  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'user is eligible for disount';
  } else {
    result = 'user is not eligible for discount';
  }
  res.send(result);
});

app.get('/check-numer-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number < 0) {
    result = 'Negative';
  } else if (number > 0) {
    result = 'Positive';
  } else {
    result = 'Zero';
  }
  res.send('Number is ' + result);
});

app.get('/check-temp', (req, res) => {
  let temp = parseFloat(req.query.temp);
  let result;
  if (temp <= 15) {
    result = 'cold';
  } else if (temp <= 25) {
    result = 'Warm';
  } else {
    result = 'Hot';
  }
  res.send('Temperature is ' + result);
});

app.get('/check-activ-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps <= 5000) {
    result = 'Slow';
  } else if (steps <= 10000) {
    result = 'Moderate';
  } else {
    result = 'High';
  }
  res.send('Activity level is ' + result);
});

app.get('/check-traffic', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'Low';
  } else if (likes < 500) {
    result = 'Medium';
  } else {
    result = 'High';
  }
  res.send('Engagement level is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
