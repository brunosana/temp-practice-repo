//Usando a notação Literal
const obj1 = {}
console.log(obj1);

//Object em JS
console.log(typeof Object)

//Notação construtora
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
    this.preco = preco
    this.desc = desc
}

const p1 = new Produto('Caneta', 5.70, 0.25);
const p2 = new Produto('Notebook', 1299.99, 0.15);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salariobase, faltas){
    return {
        nome,
        salariobase,
        faltas,
        getSalario(){
            return ((salariobase/30) * (30-faltas))
        }
    }
}


const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())


//Object.create

const filha = Object.create(null);

filha.nome = 'Ana'
console.log(filha)

//Importar do JSON

const fromJSON = JSON.parse('{"filho": "Joel Santana"}')

console.log(fromJSON)


//Constantes: - Mantém o mesmo endereço de memória mas possibilita alterar os dados.
//Definir um novo valor (const x = {nome: 'Bruno'} -> x = {nome: 'Sana'}) estará alterando o endereço, por isso,
//Não é possível

const pessoa = {nome: 'Bruno'}

Object.freeze(pessoa)

pessoa.nome = 'Maria' //Não é possível alterar, pois o objeto foi congelado, não gerará um erro mas não alterará nada
