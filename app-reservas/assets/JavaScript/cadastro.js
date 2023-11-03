let btn_submit = document.getElementById('btn-submit')

const InputNome = document.getElementById('InputNome')
const InputCpf = document.getElementById('InputCpf')
const selectQuarto = document.getElementById('num-quarto')
const InputInicio = document.getElementById('InputInicio')
const InputFinal = document.getElementById('InputFinal')	

function validarCampos(){
(e)=>(preventDefault(e))
const nome = InputNome.value
const cpf = InputCpf.value
const quarto = selectQuarto.value
const inicio = InputInicio.value
const fim = InputFinal.value

if (nome === '') {
	alert('Por favor, preencha o campo Nome.');					
} else if (cpf === ''){
	alert('Por favor, preencha o campo cpf.');
}
else if(quarto === ''){
	alert('Por favor, preencha o nº do quarto.');
}else if(inicio === ''){
	alert('Por favor, coloque data de checkin.');
}else if(fim === ''){
	alert('Por favor,  coloque data de checkout.');
}else{
			// cadastro de reservas
	fetch('http://localhost:3000/reservas', {
		method:'POST',
		body: JSON.stringify({
			nome: nome,
			CPF: cpf,
			quarto: quarto,
			dataInicio: inicio,
			dataSaida: fim
		}),
		headers:{							
			'Content-type': 'application/json'
		}
	})										
}
}
btn_submit.addEventListener('submit', ()=>{validarCampos()},  ()=>{pegarListaReserva()}) // submit + reload com func de criar linha



// botao de logout
const sair = document.getElementById('btn-sair') 
sair.addEventListener('click',()=>window.location.href ="./login.html")

//preechendo a tabela
let dadosReservas = []
function gerarDadosTabela(){
dadosReservas.forEach(function(r){

const listaDeClientes = document.getElementById('listaDeClientes') 

//Criando a linha (tr)	    
let linha = listaDeClientes.insertRow(); //Inserindo uma linha abaixo da Tabela
let tableSize = listaDeClientes.rows.length; //Calculando o tamanho da Tabela

//Criando as colunas (td)
linha.insertCell(0).innerHTML = r.num_quarto
linha.insertCell(1).innerHTML = r.cliente
linha.insertCell(2).innerHTML = r.CPF
linha.insertCell(3).innerHTML = r.Periodo
//criando botao      
let btn = document.createElement('button')
btn.className = 'btn btn-danger'
btn.innerHTML = 'Deletar Reserva'   		
linha.insertCell(4).append(btn)


btn.onclick = function (){removeToTable(linha.id)}
linha.id = tableSize; //Adicionando o id no elemento a ser criado
function removeToTable(id){

let row = id //Pegando o id da linha da tabela
row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
row.parentNode.removeChild(row); //Removendo a linha

//Retornando 'false' para impedir o reload da pagina
return false;
}

})
}
function pegarListaReserva(){
	fetch("http://localhost:3000/reservas")
	.then((response)=>{
if(response.ok === false){
	throw new Error()
}	
	return response.json()
})
	.then((dados)=>{
	dadosReservas = dados
	gerarDadosTabela()				
})

}