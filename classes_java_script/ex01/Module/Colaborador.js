
 export class Colaborador{
    constructor(nome, cpf, salario){
        this.nome = nome
        this.cpf = cpf
        this.salario = salario
    }
    promover(porcentagem){
        let salarioPromovido = this.salario * porcentagem /100
        return this.salario = salarioPromovido + this.salario
    }

    validarCPF(verificaCPF){
       this.cpf = verificaCPF.replace(/[^\d]+/g,'');
       
        if(this.cpf == ''){
         console.log("CPF Inválido!")

        }else if(this.cpf.length != 11 || 
            this.cpf == "00000000000" || 
            this.cpf == "11111111111" || 
            this.cpf == "22222222222" || 
            this.cpf == "33333333333" || 
            this.cpf == "44444444444" || 
            this.cpf == "55555555555" || 
            this.cpf == "66666666666" || 
            this.cpf == "77777777777" || 
            this.cpf == "88888888888" || 
            this.cpf == "99999999999")
            {
             console.log("CPF Inválido!");                                
             }
             
         // Valida o 1º digito	
        var add = 0;	
        for (let i=0; i < 9; i ++)		
            add += parseInt(this.cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(this.cpf.charAt(9)))		
                return false;
                		
        // Valida o 2º digito	
       var add = 0;	
        for (let i = 0; i < 10; i ++)		
            add += parseInt(this.cpf.charAt(i)) * (11 - i);	
        var rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(this.cpf.charAt(10)))
            return console.log("CPF Inválido!");		
        return console.log("CPF Validado!");
    }    
}

