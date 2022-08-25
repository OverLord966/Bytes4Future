function escadaComCardinaisInvertida(n) {
    let escada = ""
    for (let linha = 1; linha <= n; linha++) {
        escada += "".padEnd(n - linha, " ")
        escada += "".padEnd(linha, "#")
        escada += `\n`
    }
    return escada
}

console.log(escadaComCardinaisInvertida(6))
// #
// ##
// ###
// ####
// #####
// ######

// 1
// 2
// 3
// 4
// 5
// 6