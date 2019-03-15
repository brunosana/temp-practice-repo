//Pastas externas:
const moduloA = require('../../moduloa')
console.log(moduloA.ola)


//Exemplo de HTTP

const http = require('http')
http.createServer( (req, res) => {
    res.write('BomDia!')
    res.end()
}).listen(8080)