function getSum(a, b) {

    let highNum
    let lowNum
    let orderedArray = []
    let sum

    if (a === b) {
        return a
    } else {
        if (a > b) {
            highNum = a
            lowNum = b
        } else {
            highNum = b
            lowNum = a
        }

        for (let i = lowNum; i <= highNum; i++) {
            orderedArray.push(i)
        }

        sum = orderedArray.reduce((a, b) => a + b)

        return sum
    }


}

console.log(getSum(1, 5))