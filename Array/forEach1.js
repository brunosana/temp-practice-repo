const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//Função de CallBack (Nome, Indice, Array)
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`) //TemplateString
})

//Arrow Function
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

/*O terceiro parâmetro do callback passado no foreach é o próprio Array*/
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} - ${nome}`) //TemplateString
    console.log(array)
})