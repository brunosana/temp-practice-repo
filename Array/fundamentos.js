console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[5]) //Out of lenght - Undefined

aprovados.push('Alex'); //Adiciona um Novo Elemento no Array

console.log(aprovados.length) //Tamanho do Array

console.log(aprovados)


aprovados[9] = 'Rafael' //Entre o elemento 4 e 9 seráo elementos vazios (undefined), passando a existir dentro do array

console.log(aprovados.length)
console.log(aprovados)
aprovados.sort() //Ordena o array original (Altera e não retorna um novo).
console.log(aprovados)

delete aprovados[2] //Exclui um array usando o operador delete
console.log(aprovados[2])

//aprovados.splice() Adiciona elementos em determinado índice, remove, ou adiciona e remove ao mesmo tempo

aprovados.splice(1,1) //Começando do índice X, exclua Y elementos - splice(X,Y)

console.log(aprovados)

aprovados.splice(0,1, 'Bruno', 'Joel') //Começando do índice X, exclua Y elementos
//e adicione n elementos a partir do índice X

console.log(aprovados)