//Quando você cria uma variável fora de uma função ela tem escopo global.
{
    {
        {
            var eoq = 'Olá'
            console.log(eoq)
        }
    }
}

console.log(eoq)

//Redefinindo variáveis
var eoq = 'Mundo'

console.log(eoq)



var numero = 1
{
    var numero = 2
    console.log('Quem tá dentro = ', numero)
}

console.log('Quem tá fora = ', numero)