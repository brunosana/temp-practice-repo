Array.prototype.map2 = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length;i++) {
        newArray.push(callback(this[i]))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const justPrecos = function (e) {
    return JSON.parse(e).preco
}


const precos = carrinho.map2(justPrecos)

console.log(precos)