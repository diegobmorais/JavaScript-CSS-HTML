export class CalculadoraDeArea{
    constructor(tipo, base, altura){
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
    }
    calcular() {
        
        const op = this.tipo

        switch(op){
            case "quadrado":               
            return this.base * this.altura
            break;

            case "retangulo":                         
            return this.base * this.altura
             break

             case "triangulo":
             return (this.base * this.altura) / 2
             break
        }
    }
}