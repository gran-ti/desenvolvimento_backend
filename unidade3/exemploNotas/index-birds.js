//import express from 'express';
const express = require('express')
const app = express();

let router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('Birds home page');
});

app.use('/birds', router);

app.listen(3000, () => console.log("Servidor pronto"));