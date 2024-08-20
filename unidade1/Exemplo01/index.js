/*
console.log("Alo Mundo");
for(let a = 1; a <= 10 ; a++){
    console.log(a);
 }
let a = 5, b = 2, c = 3;
let maior;
if ((a>b)&&(a>c)) {
   console.log("A contém o maior valor");
   maior = a; 
} else if((b>a)&&(b>c)){
   console.log("B contém o maior valor");
   maior = b; 
} else {
   console.log("C contém o maior valor");
   maior = c; 
}
function somar_v1(a,b) {
    return a + b;
}
const somar_v2 = (a,b) => {
    return a + b;
}
const somar_v3 = (a,b) => a + b;
console.log(somar_v3(somar_v1(1,2),somar_v2(3,4)));
*/
class Pessoa{
    exibir = () => {
        console.log(`${this.nome}::${this.idade}`)
    }
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
} 
let p = new Pessoa("Ana",25);
p.exibir();

let $http = require("http");

const callback = (data) => {
    console.log(data);
 };
 
const exibir_pagina = (url) => {
    $http.get(url, callback);
}

exibir_pagina("http://www.google.com");
 