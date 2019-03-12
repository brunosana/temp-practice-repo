const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//Ele vai procurar os atributos em ferrari, se não achar, ele vai procurar no protótipo filho
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ == null)

function meuObjeto() {}

console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype)

//Herança de Protótipos
Object.prototype.attr0 = 'Atributo 0'

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

//O protótipo do pai é o avô, e o protótipo do filho é o pai, então:

console.log(filho.attr1) //Filho tem attr1? Então vai buscar no pai, tem attr1? então vai buscar no avô etc..
//Caso nenhum dos protótipos tenha o atributo, ele irá buscar no Object.prototype, portanto a linha baixo exetutará:

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

//Segunda forma de setar o protótipo

const carro2 = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
 }


 const ferrari2 = {
     modelo: 'F40',
     velMax: 324 //shadowing - Sombreamento de variável
 }

const volvo2 = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//Objeto Filho - Objeto Pai
Object.setPrototypeOf(ferrari2, carro2)
Object.setPrototypeOf(volvo2, carro2)

console.log(ferrari2)
console.log(volvo2)

volvo2.acelerarMais(100)
console.log(volvo2.status())