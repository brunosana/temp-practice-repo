const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Mostra os nomes dos atributos
console.log(Object.values(pessoa)) //Mostra os valores dos atributos
console.log(Object.entries(pessoa)) //Mostra um par ordenado (atributo e valor)

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) //Varre o objeto e mostra o atributo e o valor (indice 0 ATR indice 1 Valor)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) //Recebendo por par ordenado
});

//Você pode definir características da propriedade
//Target -> Atributo
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //Se pode ser listada
    writable: false, //Se pode ser modificada
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017' //Não irá modificar pois não pode ser modificada
console.log(pessoa.dataDeNascimento)


//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
//Concatena objetos: (objeto de destino, objetos) -> Se já houver atributo, será sobrescrito
const obj = Object.assign(dest, o1, o2)

console.log(obj)