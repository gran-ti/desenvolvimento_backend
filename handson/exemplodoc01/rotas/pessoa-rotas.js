const express = require('express')
const PessoaDAO = require('../daos/PessoaDao')
const mensageria = require('../sender/rabbit-sender.js')

const router = express.Router()
const dao = new PessoaDAO()

router.get("/", async (req,res) => {
    res.json(await dao.obterTodos());
})

router.post("/", async(req,res) => {
    const pessoa = await dao.incluir(req.body);
    mensageria.sendToQueue(pessoa); 
    res.json(pessoa);
})

router.delete('/:id', async(req,res) => {
    res.json(await dao.excluir(req.params.id));
})

module.exports = router