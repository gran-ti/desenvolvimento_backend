const $http = require("http");
const $os = require("os");
const $fs = require("fs")

const savelog = () => {
    $fs.appendFileSync('log.txt',`Acesso efetuado em ${new Date()}\n`);
}

$http.createServer((req,res)=>{
   res.writeHead(200, {"Content-Type":"text/html"});
   res.write("<html><body>");
   res.write("<h1>Servidor</h1>");
   res.write(`Plataforma: ${$os.platform}<br/>`);  
   res.write(`Endereco: ${$os.hostname}<br/>`);
   res.end();
   savelog();
}).listen(3000)

console.log("Servidor executando na porta 3000");