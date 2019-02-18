for(var i = 1; i<10; i++){
    console.log(i);
}

console.log('i = ', i);

// Parte 2

const funcs = []

for(var i = 0; i<10;i++){
    //Adicionar um elemento no array
    //Passando uma função anônima para o vetor
    funcs.push(function(){
        console.log(i);
    })
}

//Invocando a função de índice 2
funcs[2]()
// ||       ||   ||   ||  ||   8
funcs[8]()