function reversed(str){
    let reversedWord = str.split(' ')
    let answer = reversedWord.map(word => word.split('').reverse().join('')).join(' ')
    return answer
}

reversed('The quick brown fox jumps over the lazy dog.')