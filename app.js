const livros = require('./database')
const {id, nome, autor, categoria, paginas, recomenda, leu} = livros

// pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

// se for sim, mostra categorias disponíveis e pergunta qual categoria ela escolhe
// se for não, mostra todos os livros em ordem crescente de paginas
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorías disponíveis:')
    livros.map(categorias=>console.log(categorias.categoria)) 

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essa é a lista completa disponível:')
    console.table(livrosOrdenados)
}

