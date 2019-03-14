const nomes = ['Bruno', 'Larissa', 'Ivana', 'Joelma', 'Nazário']



Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i<this.length; i++){
        callback(this[i], i, this);
    }
}

nomes.forEach2(function(nome, indice){
    console.log(nome)
})