import { CalculadoraDeArea } from "./Calculadora.js";

const quadA = new CalculadoraDeArea("quadrado", 4, 4);

//const areaQA = quadA.calcular();
console.log(quadA.calcular()); // 16

const triangB = new CalculadoraDeArea("triangulo", 6, 8);
const areaTB = triangB.calcular();
console.log(areaTB); // 24

const retangulo = new CalculadoraDeArea("retangulo", 4, 6);
const areaRetan = retangulo.calcular();
console.log(areaRetan); //24