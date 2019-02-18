const valor = 'Global'

function funcao(){
    console.log(valor)
}

//Por conta do contexto léxico (contexto no qual a função foi escrita) a variável lida vai ser 'Global'
function exec() {
    const valor = 'Local'
    funcao()
}

funcao()
exec()

function exec2() {
    const valor = 'Local'
    function a() {
        console.log(valor)
    }
    a()
}

exec2()