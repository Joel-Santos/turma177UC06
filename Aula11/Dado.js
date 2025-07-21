class Dado{
    #face;
    constructor(){
        let faceRandom = Math.floor(Math.random()*6 + 1);//Gerar um numero rand de 1 a 6       
        this.#face = faceRandom;
        Object.freeze(this); //previnindo a criação de novos atributos
    }
    setFace(face){
        this.#face = face;
    }
    getFace(){
        return this.#face;
    }
}
module.exports = {Dado};

let d1 = new Dado();
// console.log(d1.getFace());


