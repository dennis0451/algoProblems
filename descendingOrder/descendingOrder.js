// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n) {

    let num = n.toString().split('')

    let largestNum = parseInt(num.sort((a,b) => b-a).join(''))



    return largestNum
}

console.log(descendingOrder(42145))