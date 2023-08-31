/*
Exercícios de interpretação de código
==================================
(1)

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

será impresso no console primeiramente o primeiro item do array "elenco",
depois será o item 4 do array, pois o lenght é 4 - 1, levando em conta que a contagem começa pelo zero o item 3 é o quarto.
Após isso será o terceiro item do array "transmissoesHoje".

======================
(2)

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

Irá imprimir primeiro os dados do cachorro, depois os mesmos dados para o gato,
porém com o nome "Juba" no lugar de juca, e depois a mesma coisa com a tartaruga,
porém o nome "Juba" com "o" no lugar de de "a" no final.

===========================
(3)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

Irá aparecer false, que é a resposta da variável backender,
e a altura é indefinida pois não foi definida dentro do obeto

Exercícios de escrita de código
=================
(1)
(a)
*/

const pessoa1 = {
	nome: "Pablo", 
	apelidos: ["Pablito", "Caleb", "Bito"]
 }

 const apresentacao = (objeto) => {
	console.log('Eu sou', objeto.nome, 'mas pode me chamar de : ', objeto.apelidos[0], ',', objeto.apelidos[1], 'ou', objeto.apelidos[2])
 } 

 apresentacao(pessoa1)

 /*
 =====================
 (b)
 */

 const pessoa2 = {
	...pessoa1, apelidos: ["Lolzeiro", "Vampiro", "Antonio"]
 }

 apresentacao(pessoa2)

 /*
 ====================
 (2)
 (a)
 */

const pessoa3 = {
	nome: "Páblo",
	idade: 24,
	profissão: "Eletrotécnico"
}

const pessoa4 = {
	nome: "Emelin",
	idade: 21,
	profissão: "Caixa"
}

//(b)

const informacoes = (objeto) =>{
	const dados1 = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão]
	return dados1
}

console.log(informacoes(pessoa3))
console.log(informacoes(pessoa4))

/*
(3)
(a)
*/

const carrinho = []

//(b)

const fruta1 = {
	nome: "Pêra",
	disponibilidade: true
}

const fruta2 = {
	nome: "Maçã",
	disponibilidade: true
}

const fruta3 = {
	nome: "Abacaxi",
	disponibilidade: true
}

//(c)

const compras = (objeto) =>{
	carrinho.push(objeto)
}

compras(fruta1)
compras(fruta2)
compras(fruta3)

//(d)

console.log(carrinho)

//Desafios

//(1)

const cadastro = (objeto) =>{
	const nomeX = prompt("Qual é o seu nome?")
	const idadeX = prompt("Qual é a sua idade?")
	const profissaoX = prompt("Qual é a sua profissão?")
	
	const pessoaX = {
		nome: nomeX,
		idade: idadeX,
		profissão: profissaoX
	}
	console.log(pessoaX)
	console.log(typeof pessoaX)
}

cadastro()

//(2)

const filmes = (objeto) =>{
	
	const filme1 = {
		nome: "Titanic",
		ano: 1997
	}

	const filme2 = {
		nome: "Pulp Fiction",
		ano: 1994
	}

	console.log("O primeiro filme foi lançado antes do segundo?", filme1.ano < filme2.ano)
	console.log("O primeiro filme foi lançado no mesmo ano que o segundo?", filme1.ano === filme2.ano)
}

filmes()

//(3)

const disponibilidadeFrutas = (objeto) =>{
	console.log("Fruta disponível?", !objeto.disponibilidade)
}

disponibilidadeFrutas(fruta1)
disponibilidadeFrutas(fruta2)
disponibilidadeFrutas(fruta3)
