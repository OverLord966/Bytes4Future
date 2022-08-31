
let letras = ["a", "b", "c", "d"]
//             0    1    2    3

letras[2]; //"c"

let mesa = {
    tampo: "madeira",
    pernas: 4
}
let mesa2 = {
    tampo: "vidro",
    pernas: 8
}
let mesa3 = {
    tampo: "plastico",
    pernas: 1
}
let mesa4 = {
    tampo: "madeira",
    pernas: 4
}

class Mesa {
    constructor(tampo, pernas) {
        this.tampo = tampo;
        this.pernas = pernas;
    }
}

let mesa1 = new Mesa("madeira", 4)
new Mesa("vidro", 8)
new Mesa("plastico", 1)

// console.log(mesa1 instanceof Mesa) // true
// console.log(mesa instanceof Mesa) // false



// mesa.pernas
// mesa["tampo"]


let gato1 = {
    corDoPelo: "Laranja",
    pesoEmKg: 4.3,
    idade: 6,
    miar: function() {
        console.log("Miaw!")
    }
}

class Gato {
    constructor(corDoPelo, pesoEmKg, idade) {
        this.corDoPelo = corDoPelo;
        this.pesoEmKg = pesoEmKg;
        this.idade = idade;
    }

    miar() {
        console.log("Miaw!")
    }

    envelhecer() {
        this.idade++
    }

}

let gato2 = new Gato("Laranja", 4.3, 1)
let gato3 = new Gato("Verde", 5, 1)

console.log(gato2.idade) //1
console.log(gato3.idade) //1

gato2.envelhecer()

console.log(gato2.idade) //2
console.log(gato3.idade) //1


// gato1.miar()
// gato2.miar()



const obj1 = {a: 1}
const obj2 = {...obj1, b: 2} // {a: 1, b: 2}
obj2.a = 2;

console.log(obj1.a) //1
console.log(obj2.a) //2

const obj3 = {...obj1, ...obj2} // {a: 2, b: 2}
let obj5 = {
    a: 2,
    b: 2
}


const obj4 = {...obj2, ...obj1} // {a: 1, b: 2}

let i = 0
function incrementaEfeito() {
    i++
}

function incrementaResultado() {
    return i + 1
}


incrementa()





// letras[2] // "c"

// let nome = "John";
// let idade = 27;
// function aumentarIdade() {
//     idade++
// }

// let pessoa = {
//     nome: "John",
//     idade: 25,
//     aumentarIdade: function() {
//         this.idade++
//     }
// }

// pessoa.aumentarIdade()

// pessoa["nome"] // "John"