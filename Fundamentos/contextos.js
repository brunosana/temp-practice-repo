let a = 20
console.log(this.a)
global.b = 300
this.c = 50
this.d = true
this.e = 'Coe Rapaz'

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

console.log(module.exports)
