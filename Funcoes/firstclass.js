//Função em JS é First Class Object (Citizens)
//High-Order Function

//Função de forma literal
function f1(){
    //Codigos aqui. Toda função retorna pelo menos a função undefined
}

//Podemos armazenar a função numa variável

const f2 = function(){} //É uma função anônima, e podemos referenciar a função pelo nome da constante


//Também é possível armazenar a função em um Array

const array = [function(a, b){return a + b}, f1(), f2]


//Armazenar a função como atributo de um objeto

const obj = {}

obj.falar = function() {return 'Coé'}

console.log(obj.falar())

//É possível passar a função como parâmetro

function run(fun){
    fun()
}

//Retornar funções como parâmetros e conter uma função

function soma(a, b){
    return function(c) {
        console.log(a+b+c)
    }
}

//Ao chamar

soma(7,2)(1)
