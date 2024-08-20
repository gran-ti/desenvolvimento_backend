const net = require('net');

const server = net.createServer((socket) => {
  socket.end(`Hora no servidor: ${new Date()}\n`);
}).on('error', (err) => {
  throw err;
});

server.listen(1234);

for(let i=1; i<=5; i++){
   const client = net.createConnection(1234,"localhost");
   client.on('data', (dados) => {console.log(dados.toString());})
         .on('end', () => {client.destroy();});
}