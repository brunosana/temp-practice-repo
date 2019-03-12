console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Toda função tem um .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    //Corta cara caractere, reverte o vetor e junta novamente
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0];
}


console.log([1,2,3,4,5].first())


//É possível substituir uma função já existente

String.prototype.toString = function () {
    return 'Ih Fudeu'
}