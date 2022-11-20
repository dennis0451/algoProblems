function findEvenIndex(arr) {
    let left = 0
    let right = arr.reduce((a,b)=> {return a + b},0)
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            left += arr[i-1]
        }
        right -= arr[i]
        if(left === right){
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));