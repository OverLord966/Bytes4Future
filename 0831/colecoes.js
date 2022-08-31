//MAPA

const mapa = new Map([
    ["a", 3]
])


mapa.get("a") //3
mapa.has("a") //true

mapa.set("b", 1)

mapa.size //2
console.log(mapa.keys())

//SET

//Não inclui valores repetidos
const set = new Set()

set.add(1)

set // Set(1) {1}
set.add(1)
set // Set(1) {1}

set.add({a: 3})
set.add({a: 3})

console.log(set)