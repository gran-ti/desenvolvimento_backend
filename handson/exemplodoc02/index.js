const express = require('express');
const mensageria = require('./sender/rabbit-sender.js')

app = express()
app.use(express.json())

let lastDados = {};

app.get("/", async (req,res)=>{
    res.json(lastDados);    
})

mensageria.consume((dados)=>{
    const recebido = dados.content.toString();
    lastDados = JSON.parse(recebido);
    console.log(`Recebido: ${recebido}`);
})

app.listen(8002, () => console.log("Servidor iniciado"))