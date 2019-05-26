module.exports = function(...produtos){
    return produtos.map(produto => {
        return {nome: produto.nome,
                preco: produto.preco,
                desconto: (produto.preco*0.10)}
    })
}