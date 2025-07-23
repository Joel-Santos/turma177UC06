//Superclasse
class Usuario{
    nome;
    email;
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }
    acessarSistema(){
        return `${this.nome} acessou o sistema.`;
    }
}
module.exports = {Usuario};