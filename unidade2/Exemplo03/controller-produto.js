import ProdutoRepo from "./model-produto.js";
import {Op} from "sequelize";

export async function imprimirTodos() {
  const produtos = await ProdutoRepo.findAll();
  console.log(JSON.stringify(produtos));
}

export async function obterTodos() {
    return await ProdutoRepo.findAll();
}

export async function obterProduto(codigo) {
    return await ProdutoRepo.findByPk(codigo);
}

export async function obterNomeQtd(nome, quantidade) {
    return await ProdutoRepo.findAll({
        attributes: ['nome', 'quantidade'],
        where: {
            nome: { [Op.like]: `${nome}%` },
            quantidade: { [Op.gt]: quantidade } 
        }
    });
}

export async function criarProduto(nome,quantidade) {
    const produto =  await ProdutoRepo.create({nome: nome, quantidade: quantidade});
    return produto.codigo;
}

export async function alterarProduto(codigo, nome, quantidade) {
    let produto = await ProdutoRepo.findByPk(codigo);
    produto.nome = nome;
    produto.quantidade = quantidade;
    return await produto.save();
}

export async function removerProduto(codigo) {
    let produto = await ProdutoRepo.findByPk(codigo);
    await produto.destroy();
}

export async function zerarQtd(){
    const [updateRows] = await ProdutoRepo.update(
        { quantidade: 0 },
        { where: { quantidade: null } }
    );
    return updateRows;
}

export async function removerZerados(){
    return await ProdutoRepo.destroy(
        {where: {quantidade: 0}}
    );
}
