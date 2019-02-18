let isAtivo = false;
console.log(isAtivo)
isAtivo = true;
console.log(isAtivo)

isAtivo = 1
//Para transformar um valor em booleano
//Usa a negação duas vezes para volta ao valor lógico original e convertido para booleano
console.log(!!isAtivo)

//Qualquer coisa é verdadeiro exceto o 0
console.log(!!' ')
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!{})

//Pra falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//Verificações

const nome = "Bruno Santana";
const nome2 = "";

console.log(nome || "Sem nome :(")