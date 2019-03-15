const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //Cliente http (faz requisições e obtém informações)

var funcionarios_ = [
    {nome: 'Bruno', pais: 'Brazil'},
    {nome: 'Joelma', pais: 'China'}
]

axios.get(url).then(response => {
    funcionarios_ = Object.values(response.data)
    const getChineses = f => f.pais === 'China'
    const getMulheres = f => f.genero === 'F'
    let funcionariosChineses = funcionarios_.filter(getChineses) // OK
    let chinesas = funcionariosChineses.filter(getMulheres) // OK
    let chinesaMenorSalario = chinesas.reduce((anterior, atual) => {
        return anterior.salario < atual.salario ? anterior : atual
    })
    console.log(chinesas)
    console.log(chinesaMenorSalario)
})



