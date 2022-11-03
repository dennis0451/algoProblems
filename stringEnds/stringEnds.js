function solution(str, ending){
    let endingLength = ending.length
    let wordArray = str.split('')
    let wordLength = str.length
    let wordMatch = []
    while(endingLength != 0){
        wordMatch.unshift(wordArray[wordLength-1])
        wordLength--
        endingLength--    
    }
    let final = wordMatch.join('');
    return final === ending? true : false
  }


  console.log(solution('abc', 'bc'))