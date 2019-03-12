//Object.preventeExtensions impede o objeto de ser expansível

const produto = Object.preventExtensions({
    nome: 'Produto', preco: 570, tag: 'Promocao' 
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borrachar'
produto.descricao = 'Borracha da Nike'
delete produto.tag
console.log(produto)

//Object.seal - É possível alterar valores, mas adicionar ou excluir é impossível

const pessoa = {nome: 'Julio', idade: 33}
Object.seal(pessoa)

console.log('Seal: ', Object.isSealed(pessoa))

//Object.freeze - Não se pode adicionar/excluir nem alterar nada.
