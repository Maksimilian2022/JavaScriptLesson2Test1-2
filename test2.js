let goodsArray = {
    "good1": {
        "id": 1,
        "name": "name1",
        "description": "description1",
        "sizes": ["size1", "size2"],
        "price": 999, 
        "available": true
    },
    "good2": {
        "id": 2,
        "name": "name2",
        "description": "description2",
        "sizes": ["size4", "size3"],
        "price": 999999999999, 
        "available": true
    },
    "good3": {
        "id": 3,
        "name": "name3",
        "description": "description3",
        "sizes": ["size6", "size5"],
        "price": 89999, 
        "available": true
    },
    "good4": {
        "id": 4,
        "name": "name4",
        "description": "description4",
        "sizes": ["size6"],
        "price": 199900, 
        "available": true
    },
    "vodka": {
        "id": 5,
        "vodka": "vodka",
        "description": "description5",
        "sizes": ["size0.25", "size0.5", "size1.0"],
        "price": 777, 
        "available": true
    }
}

let baskets = {
    "good1": {
        "good1": "good",
        "amount": 5                  
    },
    "good2": {
        "good2": "good2",
        "amount": 99                   
    }
}

function addGood(good, count) {
    baskets[good] = {"good": good, "amount": count}
}

function deleteGood(good) {
    delete baskets[good]
}

function deleteAll() {
    baskets = {}
}

function totalSumm() {
    let summ = 0
    for (const good in baskets) {
        summ += goodsArray[good]["price"] * baskets[good]["amount"]
    }
    return summ
}

addGood("vodka", 10)
console.log(baskets)

deleteGood("vodka")
console.log(baskets)

console.log(totalSumm())

deleteAll()
console.log(baskets)