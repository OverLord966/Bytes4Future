function insereLinhaEntre(primeira, segunda) {
    // Retorna uma string em que primeira e segunda estão em linhas diferentes

    // Opção 1
    // return primeira + "\n" + segunda

    // Opção 2
//     return `${primeira}
// ${segunda}`

    // Opção 3
    return `${primeira}\n${segunda}`
}

console.log(insereLinhaEntre("Bytes", "Future"))