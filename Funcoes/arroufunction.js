let dobro = function (a){
    return 2*a
}

//Com a função Arrow

dobro = (a) => {
    return 2*a
}

//Quando a arrow function não tem bloco, a linha é um retorno implícito
dobro = a => 2*a

ola = () => 'Olá'

//Função com um único parâmetro
ola = _ => 'Olá'

//O this de uma função arrow é fixo, baseado no contexto onde a função é escrita
function pessoa(){
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa;






















