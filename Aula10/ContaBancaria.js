class ContaBancaria {
    #saldo; //Atributo privado

    constructor(saldoInicial) {
        this.#saldo = saldoInicial
    }
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log("Depósito inválido, não efetuado!")
        }

    }
    sacar(valor) {
        if (this.getSaldo() >= valor && valor>0) {
            this.#saldo -= valor;
        }else if(valor<0){
            console.log("Não é possível sacar valores negativos");
        }else{
            console.log("Saldo insuficiente");
        }
    }
    getSaldo() {
        return this.#saldo;
    }
}
// let c1 = new ContaBancaria(3000);
// console.log(c1.getSaldo());
// c1.depositar(500);
// console.log(c1.getSaldo());
// c1.sacar(200);
// console.log(c1.getSaldo());
// c1.depositar(-900);
// console.log(c1.getSaldo());
// c1.sacar(4000);
// console.log(c1.getSaldo());
// c1.sacar(-90);

//exportando Classe
module.exports = ContaBancaria;










