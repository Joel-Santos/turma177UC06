const prompt = require('prompt-sync')();
const ContaBancaria = require('./ContaBancaria');

function iniciarAplicacao() {
    console.clear(); //limpando os comandos anteriores do terminal
    console.log('Bem-vindo ao Banco JS! \n');
    const saldoInicial = parseFloat(prompt("Informe o saldo inicial da conta: "));
    const conta = new ContaBancaria(saldoInicial); //instanciando o objeto conta que pertence a classe ContaBancaria
    let opcao; // declarando a variavel de controle do laço
    let valor = 0; // variavel que auxiliara no processo de deposito e saque.
    do {
        mostrarMenu(); // Acionando a função que contém as opções
        opcao = parseInt(prompt("Opção: "));
        //estrutura caso _ switch
        switch (opcao) {
            case 1:
                console.log(conta.getSaldo());
                break;
            case 2:
                valor = parseFloat(prompt("Digite quanto deseja depositar: "));
                conta.depositar(valor);
                break;
            case 3:
                 valor = parseFloat(prompt("Digite quanto deseja sacar: "));
                conta.sacar(valor);
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);
    console.log("Obrigado por usar o Banco JS!");
}



//Função que deve mostrar as opções disponiveis no sitema Banco JS
function mostrarMenu() {
    console.log('\nEscolha uma opção:')
    console.log('1 - Ver Saldo');
    console.log('2 - Depositar');
    console.log('3 - Sacar');
    console.log('0 - Sair');
}

//chamando a função iniciar para startar a aplicação
iniciarAplicacao();