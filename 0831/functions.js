//FUNÇÕES

//Podem receber argumentos, separados por virgulas
//Nome começado por verbo
//Podem produzir um efeito
//Podem calcular um resultado
//Podem ser invocadas
//Podem executar instruções

function nome_1(argumentos) {
    //Instruções
}

let nome_2 = (argumentos) => {
    //Instruções
}

let nome_3 = function (argumentos) {
    //Instruções
}



//RECURSÃO

//É uma função que se invoca a si própria
//É necessário uma condição de paragem (senão não para)
//Quando se invoca a si mesma, passa outros valores como argumentos

function recursao() {
    recursao()
}

["aba", "a", "ccccc"] //[5, 1, 3]

function viraDoAvesso(array) {
    if (array.length === 0) {
        return []
    }
    return [...viraDoAvesso(array.slice(1)), array[0].length]
    // return  viraDoAvesso(array.slice(1)).concat(array[0].length)      
}