const usuarios = [
    {
      email: "joao@gmail.com",
      nome: "João Silva",
      senha: "123456"
    },
    {
      email: "maria@hotmail.com",
      nome: "Maria Souza",
      senha: "senha123"
    },
    {
      email: "pedro@yahoo.com",
      nome: "Pedro Oliveira",
      senha: "abc123"
    },
    {
      email: "laura@gmail.com",
      nome: "Laura Santos",
      senha: "qwerty"
    },
    {
      email: "gabriel@yahoo.com",
      nome: "Gabriel Costa",
      senha: "senha12345"
    } ,   
    {
      email: "admin",
      nome: "Administrador",
      senha: "admin"
    } 
  ];

 function validarLogin(){
  const email = document.getElementById("Email").value
  const senha = document.getElementById("Senha").value

  const usuarioCorreto = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)

 if(usuarioCorreto){
    window.location.href ="./home.html"
  }else{
    alert("usuário ou senha invalido")
  }
}

