import http from "http";
import {criarProduto, obterTodos, removerProduto, alterarProduto} 
       from "./controller-produto.js";

const obterProdutos = (req, res) => {
   obterTodos().then((dados)=>{
      res.statusCode = 200;
      res.end(JSON.stringify(dados));
   });
}

const incluirProduto = (req, res) => {
   let dados = '';
   req.on( 'data', (x) => dados+=x );
   req.on( 'end',  () => {
      const produto = JSON.parse(dados);
      criarProduto(produto.nome, produto.quantidade).then((codigo)=>{
        res.statusCode = 201;
        res.end(`Produto criado: ${codigo}`);
      });
   })
}

const excluirProduto = (req, res) => {
   const codigo = req.url.substring(req.url.lastIndexOf('/')+1);
   removerProduto(codigo).then(
                 () => {res.statusCode = 204; res.end();});
 }

const modificarProduto = (req, res) => {
   const codigo = req.url.substring(req.url.lastIndexOf('/')+1);
   let dados = '';
   req.on( 'data', (x) => dados+=x );
   req.on( 'end',  () => {
      const produto = JSON.parse(dados);
      alterarProduto(codigo, produto.nome, produto.quantidade).then(
      (dados)=>{
         res.statusCode = 200;
         res.end(JSON.stringify(dados));
      });
   })
}

const server = http.createServer((req,res)=>{
   if(req.url==="/produtos" && req.method==="GET")
       obterProdutos(req,res);
   else if(req.url==="/produtos" && req.method==="POST") 
       incluirProduto(req,res);
   else if(req.url.startsWith("/produtos") && req.method==="DELETE") 
       removerProduto(req,res);
   else if(req.url.startsWith("/produtos") && req.method==="PUT") 
       modificarProduto(req,res);
   else {
       res.statusCode = 404;
       res.end('404: Not Found');
   }
});
/*
const server = http.createServer((req,res)=>{
   if(req.url==="/produtos" && req.method==="GET")
       obterTodos().then((dados)=>res.end(JSON.stringify(dados)));
   else if(req.url==="/produtos" && req.method==="POST") {
       let dados = '';
       req.on( 'data', (x) => dados+=x );
       req.on( 'end',  () => {
          const produto = JSON.parse(dados);
          criarProduto(produto.nome, produto.quantidade).then((codigo)=>{
            res.statusCode = 201;
            res.end(`Produto criado: ${codigo}`);
          });
       })
   } else {
       res.statusCode = 404;
       res.end('404: Not Found');
   }
});
*/

server.listen(3000);

/*
const req = http.request(
   {hostname: "localhost", port:3000, 
    method: "POST", path:"/produtos"},
   (res) => {
      res.on("data" , (d) => console.log(d.toString()));  
   }
)

req.write(JSON.stringify({nome:"Abacate",quantidade:450}));
req.end();
*/
