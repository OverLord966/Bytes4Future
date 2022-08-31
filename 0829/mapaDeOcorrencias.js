function mapaDeOcorrencias(array) {
    return array.reduce((mapa, ele) => {
        //Se o elemento pertencer ao mapa como chave
        if(mapa.has(ele)) {
            //Incrementa o valor em 1
            // return mapa.set(ele, mapa.get(ele) + 1)
            return new Map([...mapa, [ele, mapa.get(ele) + 1]])
        } else {
            //Caso contrário
            //Adiciona a chave ao mapa, com o valor 1
            // return mapa.set(ele, 1)
            return new Map([...mapa, [ele, 1]])
        }
    }, new Map())
}

console.log(
    mapaDeOcorrencias([1, 2, 4, 2, 1])
// Map(3) {
//     1 => 2,
//     2 => 2,
//     4 => 1
// }
)
// let mapaDeOcorrencias = new Map(); //acumulador
// for(let i = 0;i < array.length; i++) {
//     const ele = array[i] //ele
// }