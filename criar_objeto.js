const carroDoJoao = {
    modelo: 'Fiesta',
    fabriacante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vrum")
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabriacante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabriacante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

console.log(carroDoJoao2)
console.log(carroDaMaria2)



const nome = "juliana"
const idade = 28
const ehMaiorDeIdaded = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdaded: ehMaiorDeIdaded,
    conhecimentos: conhecimentos,
}

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof ehMaiorDeIdaded)
// console.log(typeof conhecimentos)
// console.log(typeof pessoa)

// console.log(carroDaMaria2 instanceof Carro)
// console.log(conhecimentos instanceof Carro)


function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

// outra forma de adicionar um novo atributo:
// pessoa['sobrenome'] = 'portela'
pessoa.sobrenome = undefined

// se existe atributo
//if (pessoa['sobrenome'])
if (pessoa.sobrenome) {
    console.log("a pessoa tem um sobrenome")
}

// se existe atributo independentemente do seu valor, se é null ou undefined
if ('sobrenome' in pessoa) {
    console.log('tem sobrenome')
}

//colocando o Object.freeze mesmo que eu altere para 'joao' ainda vai mostrar 'juliana'
Object.freeze(pessoa)

pessoa.nome = 'joao'

// Acessando atributos de um objeto
console.log(pessoa.nome)
console.log(pessoa['nome'])

//saber as propriedades do objeto
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))