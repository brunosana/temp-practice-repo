const fabricantes = ["Mercedes", "Audi", "BMW"]


function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//QUando um determinado evento acontecer a função é chamada de volta

//ForEach -> Função do array.
//Para cada elemento que o foreach encontrar, ele vai chamar a função e passar os parâmetros.

fabricantes.forEach(imprimir)

//Ele manda o fabricante como parâmetro
fabricantes.forEach(function(a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante))

//O evento é o loop que acontece, então cada elemento que é encontrado, ele chama a função

//Diferença entre usar e não usar o callback

const notas = [7.7, 6.5, 8.9, 3.6, 7.1, 9.0]

//Se não usarmos a função CallBack

let notasBaixas = []

for(let i in notas){
    if(notas[i] > 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Usando o CallBack
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)


//Callback com função arrow
//No caso, o filter percorre o array e o critério de inserção é a função arrow que verifica se a nota é menor que 7
const notasBaixas3 = notas.filter(nota => nota < 7)

//Reutilizando funções

const notasMenorQUe7 = nota => nota < 7

const notasbaixas4 = notas.filter(notasMenorQUe7)