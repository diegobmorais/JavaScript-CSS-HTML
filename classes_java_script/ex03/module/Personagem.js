export class Persosagem{
    constructor(nome, percentualVida){
        this.nome = nome;
        this.percentualVida = percentualVida;
    }
    

    sofreuDano(percentualDano){    
        this.percentualVida =  this.percentualVida - percentualDano
        
     }
         
     usouKitMedico(vida){
        this.percentualVida = this.percentualVida + vida
        return this.percentualVida
    }
}