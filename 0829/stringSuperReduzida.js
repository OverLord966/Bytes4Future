function stringSuperReduzida(str) {
    let reduzida = false
    //Enquanto a string não está reduzida
    while (!reduzida) {
        // Assume que a string está reduzida
        reduzida = true

        // Para cada elemento
        for (let i = 0; i < str.length; i++) {
            // Se o elemento e o próximo são iguais
            if (str[i] === str[i + 1]) {
                // Remove-os da string
                str = str.slice(0, i) + str.slice(i + 2);

                reduzida = false;
                // Marca string como não estando reduzida
            }
        }
    }

    if(str.length === 0) return "String Vazia"

    return str
}

console.log(stringSuperReduzida("abbcd")) //acd
console.log(stringSuperReduzida("abba")) //String Vazia.
console.log(stringSuperReduzida("abbcbbca")) //String Vazia.
console.log(stringSuperReduzida("abbcbbcaa")) //a