function tratarErroLancar(erro){
    //throw new Error('Ops :(')
    throw "Ops"
    //thow 10 || throw true
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch (e){
        tratarErroLancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {name: 'Bruno'}
imprimirNomeGritado(obj)