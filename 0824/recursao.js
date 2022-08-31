//ContaPares

function contaPares(array) {
    if (array.length === 0) {
        return 0
    }
    if (array[0] % 2 === 0) {
        //O primeiro elemento é par
        return 1 + contaPares(array.slice(1))
    } else {
        //O primeiro elemento é ímpar
        return 0 + contaPares(array.slice(1))
    }
}

// console.log(
//     contaPares([2, 3, 4, 1, 2]) //3
// )

// contaPares([2, 3, 4, 1, 2])
//      1 + contaPares([3, 4, 1, 2])
//              0 + contaPares([4, 1, 2])
//                      1 + contaPares([1, 2])
//                              0 + contaPares([2])
//                                      1 + contaPares([])
//                                              0



//InverteArray
function inverteArray(array) {
    if (array.length === 0) {
        return []
    }
    // array.slice(1).concat(array[0])
    return [
        ...inverteArray(array.slice(1)),
        array[0]
    ]
}

// console.log(inverteArray([2, 3, 8, 1]))
//[inverteArray([3, 8, 1]) ,2]
//[inverteArray([8, 1]), 3 ,2]
//[inverteArray([1]), 8, 3 ,2]
//[inverteArray([]), 1, 8, 3 ,2]
//[1, 8, 3 ,2]

//Soma
function soma(array) {
    if (array.length === 0) {
        return 0
    }
    return array[array.length - 1] + soma(array.slice(0, array.length - 1))
}

console.log(
    soma([2, 3, 8, 1]) //14
)


//Aplica
function aplica(array, funcao) {
    if(array.length === 0) {
        return []
    }

    return [funcao(array[0])].concat(aplica(array.slice(1), funcao)) 
}

function timesTwo(n) {
    return n * 2
}

// console.log(aplica(    [1, 2, 3]    ,    timesTwo      )) //[2, 4, 6]

aplica([1, 2, 3], (n) => n * 3) //[3, 6, 9]


function highOrder(algo) {
    console.log(algo)
}
function multiplica(a, b) {
    return a * b
}

// highOrder(multiplica)
// highOrder(multiplica(3, 2))

//Clone
function clone(array) {
    if(array.length === 0) {
        return []
    }
    return [array[0]].concat(clone(array.slice(1)))
}

//[1, 2, 5, 43] -> [1] + f([2, 5, 43])
//[2, 5, 43] -> 2
//[5, 43] -> 5
//[43] -> 43

console.log(
    clone([1, 2, 5, 43]) //[1, 2, 5, 43]
)