const pessoa = {
    saudacao: 'Bom Dia sua Puta!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//Sem o this de this.saudacao o JS não encontra o objeto

//Haverá um conflito entre OO e Prog. Funcional.
// O Objeto agora não é pessoa e sim falar, o this não irá funcionar

const falar = pessoa.falar

//O Bind ele envia um objeto para referenciar o This, corrigindo o problema.
const falarDePessoa = pessoa.falar.bind(pessoa)

function pessoa2() {
    this.idade = 0
    //Como a linha está sendo executada no objeto pessoa, a constante não muda
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa2