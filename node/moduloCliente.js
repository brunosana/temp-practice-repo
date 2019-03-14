//Sempre que a classe terminar em 'cliente' ele irá receber outros módulos

const moduloA = require('./moduloa') //Mesma pasta usamos o ./
const moduloB = require('./modulob')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())