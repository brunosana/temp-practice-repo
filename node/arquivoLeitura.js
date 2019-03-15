//Requerer o módulo File System
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//Síncrono
//Caminho, Encode
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Leitura Assíncrona

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} - ${config.db.port}`)
})

//Leitura de uma pasta

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})