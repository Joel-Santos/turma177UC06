const {Pessoa} = require("./Pessoa");
const {Professor} = require("./Professor");
const {Aluno} = require("./Aluno");

//Exemplo de objeto Pessoa
let p1 = new Pessoa("Joel Santos", 18);
console.log(p1.apresentar());
let aluno1 = new Aluno("Maria", 87, "0001", "Fullstack");
console.log(aluno1.apresentar());
let professor1 = new Professor("Valtemir", 32, 5566, "CSS");
console.log(professor1.apresentar());

console.log(aluno1.estudar());
console.log(professor1.ensinar());
console.table(professor1);

