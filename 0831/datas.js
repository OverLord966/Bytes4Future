//DATAS

//São representadas internamente como a quantidade de ms que passaram desde 1/1/1970

function adicionaSemanas(data, semanas) {
    const dataEmMs = data.valueOf()
    const SEMANA_EM_MS = 7 * 24 * 60 * 60 * 1000

    return new Date(dataEmMs + SEMANA_EM_MS * semanas)
}

// new Date().getDay()
// new Date().getDate()
// new Date().getMonth()
// new Date().getFullYear()
console.log(new Date().getMilliseconds())