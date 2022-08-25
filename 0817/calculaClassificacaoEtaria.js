// Implementa uma função com o nome calculaClassificacaoEtaria que recebe o número de anos completos de uma criança e retorna a classificação etária:
// Entre 0 e 1 Anos: Lactente
// Entre 2 e 4 anos: Pré-escolar
// Entre 5 e 10 anos: Escolar
// Entre 11 e 17 anos: Adolescente
function calculaClassificacaoEtaria(idade) {
    if (idade <= 1) return "Lactente"
    if (idade <= 4) return "Pré-escolar"
    if (idade <= 10) return "Escolar"
    if (idade <= 17) return "Adolescente"
    // if (idade >= 0 && idade <= 1) return "Lactente"
    // if (idade >= 2 && idade <= 4) return "Pré-escolar"
    // if (idade >= 5 && idade <= 10) return "Escolar"
    // if (idade >= 11 && idade <= 17) return "Adolescente"
}
console.log(calculaClassificacaoEtaria(0))  // Lactente
console.log(calculaClassificacaoEtaria(2))  // Pré-escolar
console.log(calculaClassificacaoEtaria(3))  // Pré-escolar
console.log(calculaClassificacaoEtaria(5))  // Escolar
console.log(calculaClassificacaoEtaria(8))  // Escolar
console.log(calculaClassificacaoEtaria(15)) // Adolescente
console.log(calculaClassificacaoEtaria(20)) // undefined