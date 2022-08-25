// Implementa uma função com o nome mesesDoAno que recebe uma abreviatura que representa um mês do ano, e retorna o mês correspondente. Exemplo:

function mesesDoAno(abreviatura) {
    switch (abreviatura) {
        case "jan": return "Janeiro"
        case "fev": return "Fevereiro"
        case "mar": return "Março"
        case "abr": return "Abril"
        case "mai": return "Maio"
        case "jun": return "Junho"
        case "jul": return "Julho"
        case "ago": return "Agosto"
        case "set": return "Setembro"
        case "out": return "Outubro"
        case "nov": return "Novembro"
        case "dez": return "Dezembro"
    }
}

console.log(mesesDoAno("jan")) // Janeiro
console.log(mesesDoAno("out")) // Outubro