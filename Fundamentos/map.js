const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(valor, chave)
})

// Verificar se tem
chavesVariadas.has(123)

//Deletar
chavesVariadas.delete(123)

chavesVariadas.size