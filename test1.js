function numberCheck(num) {
    for (let index = 2; index <= num; index++) {
        if (num % index === 0 && !(index === num)) {
            return false
        }
    return true
    }
}



function primeNumberSearch() {
    let count = process.argv[2]
    let primeNumbers = [];
        for (let i = 1; primeNumbers.length < count; i++) {
            if (numberCheck(i)) {
                primeNumbers.push(i)
            }
        }
    return primeNumbers
}

console.log(primeNumberSearch())

