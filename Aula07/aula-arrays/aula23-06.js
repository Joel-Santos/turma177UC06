//Uma estrutura de dados homogênea e heterogênea
//Um array homogêneo
let frutas = ["maçã", "banana", "laranja"];
//exibindo a posição 1 do array (0 a 2);
console.log(frutas[1]);

let numeros = [1,2,3];
//adicionar um novo elemento ao array
numeros.push(4);  //adicionar um novo elemento ao final
console.log(numeros);
numeros.unshift(4); //adiciona um elemento ao inicio do array
console.log(numeros);

numeros.pop() //remove o ultimo elemento do array
console.log(numeros);
numeros.shift(); //remove o primeiro elemento do array
console.log(numeros);

console.log("TAMANHO DO ARRAY", numeros.length); //retorna o tamanho do array (posições)

let estados = ["SP", "RN", "PE", "PB", "RS", "RJ"];
console.log(estados.indexOf("PE")); //retornar o indice do valor ou -1 se não for encontrado.

console.log(estados.includes("RN")); // Verifica se um valor existe no array (true/false)

estados.reverse(); // inverte o array
console.log(estados);

//funções interessantes e importantes

let number = [10,0,5,7];
number.sort((a,b) => a-b); //ordenação do array númerico
console.log(number);

let nomes = ["Ana", "Joel", "Helena", "Fábia"];
nomes.sort(); //ordenação do array textual
console.log(nomes);

// função que serve para percorrer o array
nomes.forEach((n,i)=>{
    console.log(i,n);
});

console.log(number)
let numbers2 = number.map(x=>x+2); //mapeia e retorna um novo array com modificações ou copia.
console.log(numbers2)

let valores = [10,20,30,40];
let maiores = valores.filter(x=> x > 25); //filtrar e retornar valores acima de 25
console.log(maiores);

console.log(valores.find(x=> x>=25)); // retornar o primeiro valor encontrado no array


//Leia do usuário o nome de 5 frutas. adicione num array e exiba num console como saída.



