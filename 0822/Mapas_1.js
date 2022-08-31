function contaOcurrencias(array) {
    let mapaDeOcurrencias = new Map();
    //Percorrer o array
    for(let i = 0; i < array.length; i++) {
        //Alterar o mapa
        const elementoAtual = array[i]

        //Não queremos chaves repetidas no mapa
        //Se o elemento não estiver no mapa
        if(!mapaDeOcurrencias.has(elementoAtual)) {
            //Vamos introduzir o elemento no mapa
            mapaDeOcurrencias.set(elementoAtual, 1);
        } else {
            //Se estiver, incrementamos o valor em 1
            mapaDeOcurrencias.set(elementoAtual, mapaDeOcurrencias.get(elementoAtual) + 1)
        }
    }
    return mapaDeOcurrencias
}

console.log(contaOcurrencias(["a", "b", "c", "b", "c"]))
//  Map { 
//     "a": 1,
//     "b": 2,
//     "c": 2,
//     }

console.log(contaOcurrencias([1, 3, 1, 4, 5]))
//  Map { 
//     1: 2,
//     3: 1,
//     4: 1,
//     5: 1
//     }


const exemploDeMapa = new Map([
    ["a", 2]
])

// console.log(exemploDeMapa.get("a")) //2