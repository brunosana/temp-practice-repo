console.log(module.exports === this)

console.log(module.exports === exports)

this.a = 1 //a será visível fora do arquivo
exports.b = 2 // Também
module.exports.c = 3 //Também

exports = null

console.log(module.exports) 
//Exports é só uma variável que aponta pro mesmo objeto
//O único uqe será exportado é o module.exports