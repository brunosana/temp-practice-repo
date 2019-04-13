for (let letra of "BRUNO SANA"){
    console.log(letra)
}


const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}