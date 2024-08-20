const express = require("express")
const webhooks = require('node-webhooks')

const routes = express.Router();


const dados = [1,2,3];

routes.get("/", (req, res) => {
    res.json({valores: dados});
})

routes.post("/", (req, res) => {
    dados.push(req.body.valor);
    const hooks = registerHooks();
    hooks.trigger('callback_hook', { msg: "novo valor", data: req.body.valor });
    res.json({valores: dados});
})

const registerHooks = () => {
    return new webhooks({
        db: {
            'callback_hook': ['http://localhost:8005/webhook-client']
        }
    });
}
module.exports = routes

