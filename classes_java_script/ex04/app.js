import { Gato } from "./module/Gato.js"
import { Cachorro } from "./module/Cachorro.js"

const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som)

const frajola = new Gato("Frajola", 8);
console.log(frajola.som)
//teste
console.log(snoopy.nome)