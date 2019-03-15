const contadorA = require('./instanciaUnica')//Retorna uma objeto
const contadorB = require('./instanciaUnica')//Retorna um objeto

const contadorC = require('./instanciaNova')() //Retorna uma função

const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)