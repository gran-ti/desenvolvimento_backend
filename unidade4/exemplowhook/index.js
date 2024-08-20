const bodyParser = require("body-parser");
const express = require("express")
const cors = require('cors');
const routes = require('./rotas.js');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));


app.use("/valores",routes);
app.listen(3000,()=>console.log('app1'));

const app2 = express();
app2.use(bodyParser.json());
app2.use(cors({origin:'*'}));

app2.post('/webhook-client', async(req, res) => {
    console.log('Inside Callback hook', req.body)
    return res.status(200).end();
});

app2.listen(8005,()=>console.log('app2'));