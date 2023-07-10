function numberCheck(num) {
    for (let index = 2; index <= num; index++) {
        if (num % index === 0 && !(index === num)) {
            return false
        }
    return true
    }
}



function primeNumberSearch(num) {
    let count = num
    let primeNumbers = [];
        for (let i = 1; primeNumbers.length < count; i++) {
            if (numberCheck(i)) {
                primeNumbers.push(i)
            }
        }
    return primeNumbers
}

console.log(primeNumberSearch(10))

