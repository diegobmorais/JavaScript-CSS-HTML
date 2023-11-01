import { Colaborador } from "./Module/Colaborador.js";


const ada = new Colaborador("Ada Lovelace", "528.442.040-31", 1000);

console.log(ada.nome); 

ada.promover(30);
console.log(ada.salario); 

ada.validarCPF("091.714.176-80")
console.log(ada.cpf); 