const express = require('express');
const ArquivoPDF =  require('pdfkit');
const QRCode = require('qrcode');

const app = express();
app.get('/gerarPDF', (req, res) => {
    const doc = new ArquivoPDF({bufferPages: true});
    let dados = [];
    doc.on('data', dados.push.bind(dados));
    doc.on('end', () => {
        let pdf = Buffer.concat(dados);
        res.writeHead(200, {
           'Content-Length': Buffer.byteLength(pdf),
           'Content-Type': 'application/pdf'})
        .end(pdf);
    });
    doc.font('Times-Roman').fontSize(16).text('APENAS UM EXEMPLO');
    doc.end();
});

app.get("/qrcode",(req,res)=>{
    QRCode.toString('https://www.google.com', {
        errorCorrectionLevel: 'H',
        width: 200,
        type: 'svg'
      }, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<html><body>");
        res.write(data);
        res.write("</body></html>");
        res.end();
    });
})
app.listen(3000);

const somar = async (a,b)  => a + b;

const imprimir_soma = async(a,b) => {
    let valor = await somar(a,b);
    console.log(valor);
    return "Processo Concluido";
}

imprimir_soma(1,2).then((retorno) => console.log(retorno));

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('valor', (valor) => {
    console.log(`Emitido o valor ${valor}`);
});

for(let i=1; i<=100; i++)
   eventEmitter.emit('valor',i);