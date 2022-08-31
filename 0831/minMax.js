function minMax(array, numero){
    return array.sort((a, b) => b - a)
}
function minMax1(array, numero){
    return array.sort((a, b) => b + a)
}
console.log(
minMax([1, 2, 3, 4, 5], 4), // [10, 14]
minMax1([1, 2, 3, 4, 5], 2) // [3, 9]
)