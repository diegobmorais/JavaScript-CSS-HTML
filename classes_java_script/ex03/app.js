import { Persosagem } from "./module/Personagem.js";

const diego = new Persosagem("diegoAK", 100)

console.log("vida atual", diego.percentualVida)

while(diego.percentualVida != 0){
    diego.sofreuDano(30)
    console.log("dano sofrido -30, vida restante - ", diego.percentualVida)

    diego.usouKitMedico(10)
    if(diego.percentualVida < 30){
        console.log("dano sofrido -30")
        console.log("Heroi morreu")
        break
    }else{
    console.log("Vc usou kit +10, sua vida atual -", diego.percentualVida) 
    diego.percentualVida = diego.percentualVida }
    
}

