import { Juros } from "./module/juros.js";

const app = new Juros(10.000, 0.07, 24);
const jurosSimples = app.calcularJurosSimples();
const jurosCompostos = app.calcularJurosCompostos();

console.log(`Juros simples da aplicação: R$ ${jurosSimples}`);
console.log(`Juros compostos da aplicação: R$ ${jurosCompostos}`);


const app2 = new Juros(10.000, 0.15, 10);
const jurosSimples2 = app2.calcularJurosSimples();
const jurosCompostos2 = app2.calcularJurosCompostos();

console.log(`Juros simples da 2º aplicação: R$ ${jurosSimples2}`);
console.log(`Juros compostos da 2º aplicação: R$ ${jurosCompostos2}`);