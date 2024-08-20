const $fs = require("fs");

$fs.appendFile('log.txt',`Escrito em ${new Date()}\n`,'utf8',
  (err)=>{
    if(err) throw err;
    console.log("Linha adicionada");
});
