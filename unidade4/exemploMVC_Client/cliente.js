const axios = require('axios')

const api = axios.create({
    baseURL: "http://localhost:3000"
});

class Cliente {
    obterTodos = async () => {
        let resp =  await api.get('personagens');
        return await resp.data;
    }

    incluir = async(nome,ataque,defesa) => {
        let resp = await api.post('personagens',{nome,ataque,defesa});
        return await resp.data;
    }

    obter = async (id) => {
        let resp =  await api.get(`personagens/${id}`);
        return await resp.data;
    }

    excluir = async(id) => {
        let resp = await api.delete(`personagens/${id}`);
        return await resp.data;
    }

    alterar = async(id,nome,ataque,defesa) => {
        let resp = await api.put(`personagens/${id}`,{nome,ataque,defesa});
        return await resp.data;
    }
}

module.exports = Cliente;

