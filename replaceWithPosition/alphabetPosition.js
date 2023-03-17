function alphabetPosition(text) {
    let alphaObj = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26

        
    }
    textArr = text.toLowerCase().split('')
    textStr = []
    regex = /[a-z]/
    for(let i = 0; i < textArr.length; i++){
        if(regex.test(textArr[i])){
            textStr.push(alphaObj[textArr[i]])
            textStr.push(" ")
        }
    }
    textStr.push(' ')
    textStr = textStr.join('')
    
  return textStr;
}

console.log(alphabetPosition("10101010001001010 TEST test FIXED FiXeD l0s Angele5 Cal1f0rn1a"));
