// function count(string) {
//   let histogram = {};
//   let string_arr = []

//   for(let h in string){
//     if(string[h] != ' '){
//         string_arr.push(string[h])
//     }
// }
// string_arr.sort()
// console.log(string_arr)

// //   for (let i = 0; i < string.length; i++) {
// //     let char = string[i];
// //     if (!histogram[char]) {
// //       histogram[char] = 0;
// //     }
// //     histogram[char]++;
// //   }
//   return histogram;
// }

console.log(hash("dennis i a nerd"));







function hash(string){
    let count_obj = {}
    for(let i in string){
        if (/^[a-zA-Z]*$/.test(string[i])) {
          let letter = string[i]
          if(!count_obj[letter]){
              count_obj[letter]=0
          }
          count_obj[letter]++
        }
    }
    return count_obj
}


console.log(hash('she sells sea shells by the sea shore'))























