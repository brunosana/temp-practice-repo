//console.log(global)
global.MinhaApp = Object.freeze({ //Impede de alterar os atributos
    saudacao() {
        return 'Saudando'
    },
    nome: 'Sistema1'
})