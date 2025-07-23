const prompt = require('prompt-sync')();
const { Dado } = require('./Dado');
const { Jogador } = require('./Jogador');
const { SistemaAzar } = require('./SistemaAzar');

function iniciarSistema() {
    let novoTurno = "";
    console.log("Bem-vindo ao undefined177");
    let nome = prompt("Informe o seu nome: ");
    do {
        let aposta = parseInt(prompt("Digite um valor de 1 a 6: "));
        if (aposta < 1 || aposta > 6) {
            console.log("Aposta inválida!");
        } else {
            let lance = new Dado(); //instanciando o objeto Dado
            let jogador = new Jogador(nome, aposta); //instanciando o objeto Jogador
            const tigrinho = new SistemaAzar(lance, jogador);
            tigrinho.verificarGanhador(); //aciona o método verificar ganhador da Classe SistemaAzar
            novoTurno = prompt("Digite S para uma nova aposta ou N para encerrar: ");
        }
    } while (novoTurno.toUpperCase() !== 'N');
    console.log("Obrigado por ivestir seu dinheiro conosco!");
}
iniciarSistema(); //acionando a função