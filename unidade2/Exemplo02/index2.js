const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá Mundo!');
  })
server.listen(3000);

const req = http.request(
    {hostname: 'localhost', port: 3000, method: 'GET'}, 
    (res) => {
        res.on('data', (d) => { console.log(d.toString()); });
    });
req.end();