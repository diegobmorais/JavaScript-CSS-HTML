export class Fatura{
    constructor(id, descricao, quantia=0, preco=0){
       this.id = id; 
       this.descricao = descricao; 
       this.quantia = quantia; 
       this.preco = preco; 
    }
    obterValorTotal(){
        const total = this.quantia * this.preco
        return total
    }
    get valorTotal(){
        return this.quantia * this.preco
    }
}