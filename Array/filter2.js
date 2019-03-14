//Simulando o filter

Array.prototype.filter2 = function (callback) {
    let array = []
    for (let i=0;i<this.length;i++){
        if(callback(this[i])) array.push(this[i])
    }
    return array
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipadPro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = e => e.preco > 1500

console.log(produtos.filter2(caro))