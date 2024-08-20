const db = require('../models/index.js')

class PessoaDAO {
    incluir = async (objJson) => {
        return await db.Pessoa.create(objJson);
    }

    excluir = async (_id) => {
        return await db.Pessoa.destroy({where:{id:_id}});
    }

    obterTodos = async () => {
        return await db.Pessoa.findAll();
    }
}

module.exports = PessoaDAO