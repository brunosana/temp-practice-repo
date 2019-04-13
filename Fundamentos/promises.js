function falarDepoisDe(segundos, frase){
    //Resolve - Promessa atendida
    //Reject - Quando queremos rejeitar a promessa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos*1000)
    })
}


falarDepoisDe(3, 'Bom Dia Rapaziada')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => {console.log('Erro: ', e)})