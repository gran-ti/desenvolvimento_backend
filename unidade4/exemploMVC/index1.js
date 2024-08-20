const {Op} = require('sequelize');

const db = require('./models/index.js');
db.Personagem.update(
    {ataque: 999});