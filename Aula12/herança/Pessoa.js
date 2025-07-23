///Superclasse ou classe pai
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
module.exports = {Pessoa}