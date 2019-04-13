const http = require('http')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
    
        })
    })
}


//Objetivo: Simplificar o uso de Promises

let obterAlunos = async () => {
    const turma_a = await getTurma('A')
    const turma_b = await getTurma('B')
    const turma_c = await getTurma('C')

    return [].concat(turma_a, turma_b, turma_c)
} //Retorna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(n => console.log(n))