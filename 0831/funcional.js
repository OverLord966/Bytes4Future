//Programação Funcional

//Funções Puras
//   Dados os mesmos argumentos, retorna o mesmo valor
//   Não causa efeitos secundários

//Composição de Funções
//  Funções cujo seu argumento é o retorno de outras funções

//Evitar estado partilhado
//  Não partilhar variáveis entre scopes

//Evitar mutação de estado
//  Evitar alterar valores previamente definidos

//Evitar efeitos secundários

{
    let nome = "asgerguh";

    function ola() {
        nome = "awrgegw"
    }

    function apresentar() {
        console.log(nome)
    }
}


function retorna3() {
    return 3
}


let resultado;
function soma(a, b) {
    resultado = a + b
    return a + b
}

soma(soma(3, 2), soma(1, 2)) //8