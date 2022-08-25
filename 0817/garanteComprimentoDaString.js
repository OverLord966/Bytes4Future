// Implementa a função garanteComprimentoDaString que recebe uma string e um number n.
// Se a string for maior que o n, retorna apenas os primeiros n caracteres;
// Caso contrário adiciona espaços no final da string para ficar com o tamanho certo.

function garanteComprimentoDaString(str, n) {
    // if (str.length > n) {
    //     return str.slice(0, n)
    // } else {
    //     return str.padEnd(n, "_")
    // }
    return str.slice(0, n).padEnd(n, "_")
}

console.log(garanteComprimentoDaString("abc", 6))     // "abc   "
console.log(garanteComprimentoDaString("abcdefg", 6)) // "abcdef"
