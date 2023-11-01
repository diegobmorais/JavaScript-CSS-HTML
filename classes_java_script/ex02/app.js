import { Fatura } from "./Module/Fatura.js";

// forma com metodo da classe
const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();
console.log(valor); // = 6

//forma com metodo getter
const abacaxi = new Fatura(20, "Abacaxi", 4, 1.99); 

console.log(abacaxi.valorTotal); // = 7.96