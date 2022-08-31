let array = [1, 2, 3]
array.push(4)

console.log(array) //[1, 2, 3, 4]
array.pop()
console.log(array) //[1, 2, 3]

array.unshift(5)
console.log(array) //[5, 1, 2, 3]
array.shift()
array.shift()
console.log(array) //[2, 3]

array[1] //3

console.log(array[2])

let arrayDeLetras1 = ["a", "b", "c", "d"]
//                     0    1    2    3

console.log(arrayDeLetras1.length) //4
console.log(arrayDeLetras1[3]) //"d"
console.log(arrayDeLetras1[4]) //undefined
console.log(arrayDeLetras1[arrayDeLetras1.length - 1]) //"d"

let arrayDeLetras2 = [ ...arrayDeLetras1, "e", "f", "g"]
//                   ["a", "b", "c", "d", "e", "f", "g"]
//                     0    1    2    3    4    5    6


//Spread Syntax
function soma(a, b) {
    return a + b
}

let valores = [3, 6]

soma(valores[0], valores[1])
soma(...valores)



Math.min(3, 5) //3
Math.min(3, -17) //-17

let arrayDeValores = [1, -23, -1, 76, -43]
Math.min(...arrayDeValores) //-43

Math.floor(Math.random() * 10)

Math.pow(10, 10)

Math.cbrt(8)
