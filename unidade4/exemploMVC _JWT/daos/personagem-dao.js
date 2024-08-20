const db = require('../models/index.js');

class PersonagemDAO{
    
    findAll = async() => {
        return await db.Personagem.findAll();
    }

    find = async(id) => {
        return await db.Personagem.findByPk(id);
    }

    create = async(objJSON) => {
        return await db.Personagem.create(objJSON);
    }

    update = async(_id, objSON) => {
        return await db.Personagem.update(objSON, { where: { id: _id } });
    }

    delete = async(_id) => {
        return await db.Personagem.destroy({ where: { id: _id } });
    }

}

module.exports = PersonagemDAO