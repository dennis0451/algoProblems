function grow(x){
    let total = x.reduce((a,b) => a*b)
    return total
}

console.log(grow([1, 2, 3, 4]))