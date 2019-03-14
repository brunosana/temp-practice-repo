const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Exclui o último índice do array

console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento na última posição

console.log(pilotos)

pilotos.shift() //Exclui o primeiro índice do array

console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento na primeira posição

console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //A partir do índice 2, não exclua ninguém e Adicione mais 2

console.log(pilotos)

pilotos.splice(3, 1) //Removendo um elemento a partir do índice 3

console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Retorna um novo array a partir do índice 2

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//Retorna um array do índice 1 ao 4 (Índice 4 não entra)

console.log(algunsPilotos2)