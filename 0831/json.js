//JSON

//Nome das propriedades também é string

let objetoJS = {
    altura: 210,
    saltar: () => {}
}
let objetoJSON = {
    "altura": 210,
    "saltar": () => {}
}

// console.log(
//     objetoJS,
//     JSON.parse(JSON.stringify(objetoJS))
// )

let objA = {
    a: 3,
    b: 4
}

objA.a
objA["a"]



let objB = {
    a: 7,
    b: 4
}

// console.log(
//     objA === objB, //false
//     JSON.stringify(objA) === JSON.stringify(objB) //true
// )

for(let chave in objA) {
    // objA[chave]
    console.log( objA[chave] === objB[chave])
}
// for(let a of objA) {
//     console.log(a)
// }
