const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const rotaJogo = require('./rotas/jogo-rotas');
const rotaAuth = require('./rotas/auth-rotas');

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger_output.json');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/personagens', rotaJogo);
app.use('/auth', rotaAuth);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.listen(3000, () => console.log("Servidor pronto"));

module.exports = app