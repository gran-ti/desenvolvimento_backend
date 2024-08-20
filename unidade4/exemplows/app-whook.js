const bodyParser = require("body-parser");
const express = require("express")
const cors = require('cors');
//const webhooks = require('node-webhooks');
const routes = express.Router();

const app = express();
app.use(bodyParser.json);
app.use(cors({origin:'*'}));

const dados = [1,2,3];

routes.get("/", (req, res) => {
    res.json(dados);
})


/*
app.post("/dados", (req, res) => {
    valores.push(req.body.valor);
    const hooks = registerHooks();
    hooks.trigger('callback_hook', { msg: "novo valor", data: req.body.valor});
    res.send({data: valores}).end();
})

const registerHooks = () => {
    return new webhooks({
        db: {
            'callback_hook': ['http://localhost:8005/webhook-client']
        }
    });
}
*/
app.use("/valores",routes);
app.listen(3000,()=>console.log('app1'));
/*
const app2 = express();

app2.post('/webhook-client', async(req, res) => {
    console.log('Inside Callback hook', req.body)
    const { data } = req.body
    console.log(data);
    return res.status(200).end();
});

app2.listen(8005);
*/