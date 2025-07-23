const { Pessoa } = require("./Pessoa");

class Professor extends Pessoa{
    matricula;
    disciplina;
    constructor(nome, idade, matricula, disciplina){
        super(nome, idade);
        this.matricula = matricula;
        this.disciplina = disciplina;
    }
    ensinar(){
        return `${this.nome} está ensinando ${this.disciplina}`
    }
} 
module.exports = {Professor};
