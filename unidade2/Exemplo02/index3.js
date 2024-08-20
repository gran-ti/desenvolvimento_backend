const http = require('http');

const server = http.createServer((req,res) =>{
    res.write("A");
    res.write("B");
    res.end("C");
}).on("close",()=>console.log("Servidor encerrado"));

setTimeout(()=>server.close(),3000);

server.listen(3000);

const req = http.request({hostname: 'localhost', port: 3000, method:'GET'},
   (res) => {
       res.on('data', (d) => console.log("Resp: "+d.toString()));
       res.on('end',  () => console.log("Fim da comunicação"));
       res.on('close',  () => console.log("Conexão encerrada"));
   });

req.end();