import { Usuario } from "./module/Usuario.js";

const diego = new Usuario("diego","diego@gmail.com", "123456");


//console.log(diego.email, diego.senha)
//cria o botao
const btn = document.getElementById("botao")

btn.addEventListener('click',function autenticarUsuario() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // chama função autenticar da classe usuaio passando usuario e senha recuperados do html
    const autenticado = diego.autenticar(email, senha);

    // Exibe a mensagem de acordo com o resultado da autenticação
    const mensagem = document.getElementById("resultado");
    if (autenticado) {
      mensagem.textContent = "Usuário Autenticado!!";
    } else {
      mensagem.textContent = "Usuário ou senha incorreto.";
    }
    //limpa campos apos click no btn
    document.getElementById("email").value=""
    document.getElementById("senha").value=""
})