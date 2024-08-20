import { alterarProduto, criarProduto, imprimirTodos, obterNomeQtd, obterProduto, obterTodos, removerProduto, zerarQtd } from "./controller-produto.js";

//imprimirTodos();

obterTodos().then((x)=>console.log(JSON.stringify(x)));

//obterProduto(1).then((x)=>console.log(JSON.stringify(x)));

/*
obterTodos().then((x)=> {
   for(let obj of x) {
       console.log(JSON.stringify(obj));
   }
});
*/

// obterNomeQtd('La',100).then((x)=>console.log(JSON.stringify(x)));

// criarProduto("Manga",null).then((x)=>console.log(`Id gerado: ${x}`));

// alterarProduto(2,'Banana',1001).then((x)=>console.log(JSON.stringify(x)));

// removerProduto(3).then(()=>console.log("Produto Removido"));

// zerarQtd().then((x)=>console.log(`Alterados: ${x}`));