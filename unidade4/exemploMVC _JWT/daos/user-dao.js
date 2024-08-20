const db = require('../models/index.js');
const bcrypt = require('bcrypt');

class UserDAO{
    
    findByLoginSenha = async(login, senha) => {
        const usuario = await db.User.findOne({
            where: { login: login }
        });
        if(usuario){
            const valido = await bcrypt.compare(senha, usuario.senha);
            if(valido) return usuario;
        }
        return null;
    }

    create = async(objJSON) => {
        return await db.User.create(objJSON);
    }

}

module.exports = UserDAO