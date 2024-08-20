import { alterarProduto, criarProduto, obterTodos, removerZerados } from "./controller-produto.js";
/*
criarProduto("Abacate",1200).then(
    _ => obterTodos().then(
        (produtos) => {
            for(let p of produtos)
               console.log(p.nome + "::" + p.quantidade)
        }
    )
)
*/
// alterarProduto(8,"AbacateX",900).then((x)=>console.log(x));

removerZerados().then((x)=>console.log(x));