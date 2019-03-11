/*Por convenção, _ antes da variável é uma definição de variável privada (disponível apenas no escopo),
O JS não possui modificador de acesso de variáveis*/

const sequencia = {
    _valor: 50, //Convenção
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor)
        this._valor = valor//JavaScript NÃO aceita sobrecarga de métodos, a não ser o get e set
    } 
}

console.log(sequencia.valor, sequencia.valor) //Implicitamente a busca por variável o JS busca a função get
sequencia.valor = 1000 //Para o set também
