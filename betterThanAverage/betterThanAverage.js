function betterThanAverage(classPoints, yourPoints) {
    let classSum = classPoints.reduce((a,b) => a + b)
    let classAverage = classSum/classPoints.length
    return classAverage < yourPoints ? true : false
    
  }

console.log(betterThanAverage([1,2,3,4,5], 2))