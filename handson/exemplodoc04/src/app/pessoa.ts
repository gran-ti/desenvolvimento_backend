export class Pessoa {
    nome: string;
    sobrenome: string;
    telefone: string;

    constructor(nome: string = "", sobrenome: string = "",
                telefone: string =""){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
    }
}
