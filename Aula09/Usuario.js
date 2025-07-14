// Definição da classe Usuario
class Usuario {
    //Atributos para a classe Usuario
    //nome, idade, genero, telefone, email, cpf, cep, rg
    nome;
    idade;
    genero;
    telefone;
    email;
    cpf;
    cep;
    rg;

    //Método contrutor - É um método especial que é chamado quando criamos uma nova instância da classe.
    //Ele recebe os parâmetros nome, idade, genero, telefone, email, cpf, cep, rg.

    constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
        this.rg = rg;
    }
    //Métodos getters para acessar os atributos da classe
    // Retornar o nome do usuário
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getIdade() {
        return this.idade;
    }
    getGenero() {
        return this.genero;
    }
    getTelefone() {
        return this.telefone;
    }
    getCpf() {
        return this.cpf;
    }
    getCep() {
        return this.cep;
    }
    getRg() {
        return this.rg
    }
    //Métodos setters para acessar e modificar os atributos da classe
    // Retornar o nome do usuário
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    setEmail(email) {
        this.email = email;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setCep(cep) {
        this.cep = cep;
    }
    setRg(rg) {
        this.rg = rg;
    }
    //nome, idade, genero, telefone, email, cpf, cep, rg.
    exibirDados() {
    return `
    Nome: ${this.nome}
    Idade: ${this.idade}
    Genero: ${this.genero}
    Telefone: ${this.telefone}
    Email: ${this.email}
    CPF: ${this.cpf}
    CEP: ${this.cep}
    RG: ${this.rg}
    `
    }
}

//Criação de uma instância / objeto
let usuario01 = new Usuario("Joel", 18, "m", "(84)4002-8922", "joel@email.com", "000.000.000-90", "59000000", "888585");
console.log(usuario01.getNome());
console.log(usuario01.getEmail());
usuario01.setNome("Joelson");
console.log(usuario01.getNome());
console.log(usuario01.exibirDados());
