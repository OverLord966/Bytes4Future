function quickSort(arr) {
    return quickSortRecursive(arr, 0, arr.length - 1)
}

// QuickSort(array, first, last)
function quickSortRecursive(arr, first, last) {
    //   Se first < last
    if (first < last) {
        //     pivot = Partition(array, first, last)
        let pivot = partition(arr, first, last)
        //     QuickSort(array, first, pivot - 1)
        quickSortRecursive(arr, first, pivot - 1)
        //     QuickSort(array, pivot + 1, last)
        quickSortRecursive(arr, pivot + 1, last)
    }
    return arr;
}

function random(first, last) {
    return Math.floor(Math.random() * (last + 1 - first) + first)
}

let nTrocas = 0

function changePlaces(arr, indexOne, indexTwo) {
    const aux = arr[indexOne]
    arr[indexOne] = arr[indexTwo]
    arr[indexTwo] = aux
    nTrocas++;
}

//   Partition(array, first, last)
function partition(arr, first, last) {
    // console.log(`Partition Start: ${arr.slice(first, last + 1)}`)
    //   Escolhe pivot e coloca na ultima posição
    const posPivot = random(first, last)
    changePlaces(arr, last, posPivot)
    //   x = array[last]
    const x = arr[last]
    //   i = first
    let i = first
    //   Para cada j entre first e last - 1
    for (let j = first; j < last; j++) {
        //     Se array[j] < x
        // console.log(`Partition: ${arr.slice(first, last + 1)}`)
        // console.log(`i = ${i}; j = ${j}; array[i] = ${arr[i]}; array[j] = ${arr[j]}; pivot = ${x}`)
        if (arr[j] < x) {
            // console.log("troca!")
            //       Troca array[i] com array[j]
            changePlaces(arr, i, j)
            //       i++
            i++
        }

    }
    // console.log(`Partition End: ${arr.slice(first, last + 1)}`)
    //   Troca array[i] com array[last]
    changePlaces(arr, i, last)
    // console.log(`Partition End (Fixed): ${arr.slice(first, last + 1)}`)
    //   retorna i
    return i
}

function geraArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        // arr.push(Math.floor(Math.random() * n))
        arr.push(i)
    }
    return arr
}

const arr10M = geraArray(100000)
const cloneArr10M = arr10M.slice(0)
const startedAt = new Date()
const arr = quickSort(arr10M)
console.log(arr, `${(new Date() - startedAt) / 1000}s using quickSort, com ${nTrocas} trocas`)

const startedAtClone = new Date()
const arr2 = cloneArr10M.sort((a, b) => a - b)
console.log(arr2, `${(new Date() - startedAtClone) / 1000}s using .sort`)
