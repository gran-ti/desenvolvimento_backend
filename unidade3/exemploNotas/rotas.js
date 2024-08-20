const express = require('express');
const db = require('./models/index.js');

const router = express.Router();

router.get('/', async(req,res)=>{
    let dados = await db.Nota.findAll();  
    res.json(dados);
})

router.get('/:id', async(req,res)=>{
    let dados = await db.Nota.findByPk(req.params.id);  
    res.json(dados);
})

router.post('/', async(req,res)=>{
    let dados = await db.Nota.create(req.body);  
    res.json(dados);
})

router.delete('/:id', async(req,res)=>{
    let dados = await db.Nota.destroy(
        { where: { id: req.params.id } });
    res.json(dados);
})

router.put('/:id', async(req,res)=>{
    let dados = await db.Nota.update(
        req.body, 
        { where: { id: req.params.id } });
    res.json(dados);
})

module.exports = router