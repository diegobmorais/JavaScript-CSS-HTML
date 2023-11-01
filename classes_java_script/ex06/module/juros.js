export class Juros{
    constructor(capitalInicial, taxaAplicada, tempo){
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = taxaAplicada;
        this.tempo = tempo;
    }
    calcularJurosSimples(){
        const juros = this.capitalInicial * this.taxaAplicada * this.tempo;
    return juros.toFixed(2);
    }
    calcularJurosCompostos(){
        const montanteFinal = this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
        const juros = montanteFinal - this.capitalInicial;
        return juros.toFixed(2);
      
    }
}