const Personagem = require("./personagem");

class Vilao extends Personagem{
    constructor(vida, ataqueEspecial){
        super(vida);
        this.ataqueEspecial = ataqueEspecial;
    }

    ataqueEspecial(){
         return this.ataqueEspecial;
    }  
    
    atacar(){
        return Math.floor(Math.random() * this.vida );
    }

    defender(golpe){
        this.vida -= golpe;
    }
    
}

module.exports = Vilao;