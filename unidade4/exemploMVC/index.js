const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const rotaJogo = require('./rotas/jogo-rotas');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/personagens', rotaJogo);

app.listen(3000, () => console.log("Servidor pronto"));

module.exports = app