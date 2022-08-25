// function umOuOutro(a, b) {
//     if (a === b) {
//         return false
//     } else {
//         return true
//     }
// }
// function umOuOutro(a, b) {
//     return a !== b
// }
// function umOuOutro(a, b) {
//     if (!a && b) return true
//     if (a && !b) return true
//     return false
// }
// function umOuOutro(a, b) {
//     return a != b
// }
// function umOuOutro(a, b) {
//     if ((a === true && b === false)
//         || (a === false && b === true)) {
//         return true
//     } else {
//         return false
//     }
// }
function umOuOutro(a, b) {
    return (a && !b)
        || (!a && b)
}


console.log(umOuOutro(true, true))   // false
console.log(umOuOutro(false, true))  // true
console.log(umOuOutro(true, false))  // true
console.log(umOuOutro(false, false)) // false