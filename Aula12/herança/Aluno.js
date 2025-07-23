//Subclasse ou uma classe filha
const { Pessoa } = require('./Pessoa');
//aplicando a herança entre Pessoa e Aluno
class Aluno extends Pessoa {
    matricula;
    curso;

    constructor(nome, idade, matricula, curso) {
        super(nome, idade); //passando os dados para o contrutor da super classse
        this.matricula = matricula;
        this.curso = curso;
    }
    estudar(){
        return `${this.nome} está estudando no curso de ${this.curso}`;
    }
}
module.exports = {Aluno}
