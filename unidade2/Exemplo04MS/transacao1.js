const { Pessoa, sequelize } = require('./models')

const incluirPessoa = async () => {
    try { // Managed Transaction
        const p = await sequelize.transaction(async (t) => {
          const p1 = await Pessoa.create({
            nome: 'Ana', sobrenome: 'Clara'
          }, { transaction: t });
          return p1;
        });
        return p;
        // Neste ponto ocorre commit automático
    } catch(error) { }//No caso de erro, rollback automático
}

incluirPessoa().then((p)=>console.log(JSON.stringify(p)));


