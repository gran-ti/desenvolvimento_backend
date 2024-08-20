const readline = require('readline');
const Cliente = require("./cliente.js")

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cliente = new Cliente();

const ler = (pergunta) => {
    return new Promise(resolve => {
        leitor.question(pergunta,(input) => resolve(input))
    });
} 

const menu = async () => {
    console.log("1-Listar 2-Incluir 3-Alterar 4-Excluir 0-Sair");
    const valor = await ler("Digite a opcao:");
    return eval(valor);
}

const obterDados = async() => {
    const nomeStr = await ler("Nome:");
    const ataqueStr = await ler("Ataque:");
    const defesaStr = await ler("Defesa:");
    return [nomeStr, eval(ataqueStr), eval(defesaStr)];
}

const principal = async() => {
    let opcao;
    do{
        opcao = await menu();
        if(opcao==1){
            const dados = await cliente.obterTodos(); 
            for(let obj of dados)
                console.log(obj);
        }
        if(opcao==2){
            const [nome, ataque, defesa] = await obterDados();
            await cliente.incluir(nome,ataque,defesa);
        }
        if(opcao==3){
            const idStr = await ler("Id para alterar:");
            const id = eval(idStr);
            const dados = await cliente.obter(id);
            console.log(dados);
            const [nome, ataque, defesa] = await obterDados();
            await cliente.alterar(id,nome,ataque,defesa);
        }
        if(opcao==4){
            const idStr = await ler("Id para excluir:");
            await cliente.excluir(eval(idStr));
        }
    }while(opcao!=0);
}

principal().then(()=>leitor.close());
