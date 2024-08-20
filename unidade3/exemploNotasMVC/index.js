const express = require('express');
const rotaNotas = require('./rotas.js');
const db = require('./models/index.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

/*app.get('/', (req,res)=>{
    db.Nota.findAll().then((dados)=>{  
    console.log(dados);
    res.json(dados);
    });
})
*/

// db.Nota.findAll().then(dados=>console.log(dados));  

app.use('/notas', rotaNotas);

app.listen(3000, () => console.log("Servidor pronto"));

module.exports = app