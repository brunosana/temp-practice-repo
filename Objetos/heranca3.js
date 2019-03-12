function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula Primeira', 632)
const aula2 = new Aula('Aula Segunda', 795 )

console.log(aula1, aula2)

//Recriando o new
function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype //Associando o protótio do objeto ao atributo prototype da função passada
    f.apply(obj, params) //Executa a função f passando o objeto de contexto obj e os parametros no metodo novo
    return obj //Retornando o Objeto
}


const aula3 = novo(Aula, 'Aula Terceira', 568)
const aula4 = novo(Aula, 'Aula Quarta', 768)

console.log(aula3, aula4)