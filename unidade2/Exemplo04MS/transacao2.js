const { Pessoa, sequelize } = require('./models')
const incluirPessoa = async () => {
    const t = await sequelize.transaction();
    try { // Unmanaged Transaction
      const p = await Pessoa.create({
        nome: 'Joao', sobrenome: 'Paulo'
      }, { transaction: t });
      await t.commit();
      return p;
    } catch (error) {
      await t.rollback();
    }
}
incluirPessoa().then((p)=>console.log(JSON.stringify(p)));


