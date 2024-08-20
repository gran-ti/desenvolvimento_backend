'use strict';

const express = require('express');
const cors = require('cors');
const boyparser = require('body-parser')
const rotaPessoas = require('./rotas/pessoa-rotas')

const app = express();
app.use(cors({origin:"*"}));
app.use(boyparser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/pessoas',rotaPessoas);

app.listen(8001, () => {
  console.log('Servidor executando na porta 8081');
});