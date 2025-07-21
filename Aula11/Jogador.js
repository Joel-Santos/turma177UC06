class Jogador{
    #nome;
    #aposta;

    constructor(nome, aposta){
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this);
    }

    setNome(nome){
        this.#nome = nome;
    }
    getNome(){
        return this.#nome;
    }
    setAposta(aposta){
        this.#aposta = aposta;
    }
    getAposta(){
        return this.#aposta;
    }
}

module.exports = {Jogador};