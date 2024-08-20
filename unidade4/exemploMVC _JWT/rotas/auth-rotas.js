const express = require('express')
const TokenManager = require('./token-manager.js')
const UserDAO = require('../daos/user-dao.js')

const router = express.Router();
const tm = new TokenManager();
const dao = new UserDAO();

router.post('/addUser', tm.verifyJWT, async(req,res)=>{
    const usuario = await dao.create(req.body);
    return res.json({usuario: usuario});   
})

router.post('/login', async (req, res) => {
    const usuario = await dao.findByLoginSenha(req.body.login,req.body.senha);
    if(usuario){
      const id = usuario.id; 
      const token = tm.sign(id);
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
})

router.post('/logout', async (req, res) => {
    res.json({ auth: false, token: null });
})

module.exports = router
