const { Pessoa, Dependente } = require('./models')

const findAllWithDeps = async () => {
    const pessoas = await Pessoa.findAll({
        include: [{
            model: Dependente
        }]
    });
    console.log("Usuarios e Dependentes:", JSON.stringify(pessoas, null, 4));
}

const run = async () => {
    await findAllWithDeps()
    await process.exit()
}

run()