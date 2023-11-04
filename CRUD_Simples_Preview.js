
const perfil = {
    
        usuarios: [
            {
                nome: "diego",
                senha: "123456"
            }
        ],
        
        comentarios:[
            {   id: 1,
                dono: "diego",
                conteudo: "isso e um teste"
            }
        ]
}
// create
function createPost(dados){
    perfil.comentarios.push({
        id: perfil.comentarios.length + 1,
        dono: dados.dono,
        conteudo: dados.conteudo
    })
}
// read
function readPost(){
    return perfil.comentarios
}

createPost({dono: 'diego', conteudo: 'segundo teste'}) // create
createPost({dono: 'diego', conteudo: 'terceiro teste'})
console.log(perfil.comentarios)

//read
console.log(readPost())

//update

function updatePost(id, novoComentario){
    const conteudoAtualizado = readPost().find((post) => {
         return post.id === id
     });
     console.log(conteudoAtualizado)
     conteudoAtualizado.conteudo = novoComentario
 }
updatePost( 1 ,'novo comentario')
console.log(readPost())

//DELETE

function deletePost(id){
    const postDeleted = readPost().filter((post) =>{
        return post.id !== id
    })

    console.log(postDeleted)
}

deletePost(2)