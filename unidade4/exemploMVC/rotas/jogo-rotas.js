const express = require('express')
const PersonagemDAO = require('../daos/personagem-dao')

const router = express.Router();
const dao = new PersonagemDAO();

router.get('/', async(req,res)=>{
    let dados = await dao.findAll();  
    res.json(dados);
})

router.get('/:id', async(req,res)=>{
    let dados = await dao.find(req.params.id);  
    res.json(dados);
})

router.post('/', async(req,res)=>{
    let dados = await dao.create(req.body);  
    res.json(dados);
})

router.delete('/:id', async(req,res)=>{
    let dados = await dao.delete(req.params.id);
    res.json(dados);
})

router.put('/:id', async(req,res)=>{
    let dados = await dao.update(req.params.id,req.body);
    res.json(dados);
})

module.exports = router