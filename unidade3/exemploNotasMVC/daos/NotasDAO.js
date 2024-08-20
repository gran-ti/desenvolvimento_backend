const db = require('../models/index.js');

class NotasDAO{
    
    obterTodos = async() => {
        return db.Nota.findAll();
    }

    obter = async(id) => {
        return db.Nota.findByPk(id);
    }

    incluir = async(objJSON) => {
        return db.Nota.create(objJSON);
    }

    alterar = async(_id, objSON) => {
        return db.Nota.update(objSON, { where: { id: _id } });
    }

    excluir = async(_id) => {
        return db.Nota.destroy({ where: { id: _id } });
    }

}

module.exports = NotasDAO