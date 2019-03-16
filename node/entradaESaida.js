//node entradaESaida.js -a
const anonimo = process.argv.indexOf('-a') !== -1
if (anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else {
    process.stdout.write('Informe o nome: ')
    process.stdin.on('data', data => { //Quando você digita e aperta N
        const nome = data.toString().replace('\n','')
        console.log(data.toString().replace('\n', ''))
        
        process.stdout.write()
        process.stdout.write(`Oi ${nome} como você está \n`)
        process.exit()
    })
    
}