//Sintaxe básica
/*

function nome(parametros){
    return
}
*/
function saudacao(){
    console.log("Hello World!");
}

saudacao(); //realiza a chamada da função

function saudacao02(nome){
    console.log(`Hello World, ${nome}`);
}
saudacao02("Joel");//realiza a chamada da função com parametro;

function somar(a,b){
    return a+b; // retorna o valor da soma 
}
let total = somar(10,8);
console.log(total);
console.log(somar(10,10));

function potenciacao(base, expoente){
    return Math.pow(base, expoente); //base**expoente;  // retorna o valor da potência ou Math.pow(base, expoente)
}
let resultado = potenciacao(2,3);
console.log(resultado);

//Funções de seta Array functions 
let dobro = (x) => x * 2;
console.log(dobro(5));

function dobro2(x){
    return x*2
}
//função para exibir array

let games = ["Dora aventureira", "Spider man", "The sims", "Lol"];
function exibirArray(array){
    array.forEach(item => console.log(item));
} 
exibirArray(["Banana", "Maçã", "Laranja", "Pera"]);
exibirArray(games);

