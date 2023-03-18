function deleteNth(arr, n) {
  let arrObj = {};
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i]]) {
        arrObj[arr[i]]++;
      if (arrObj[arr[i]] <= n) {
        finalArr.push(arr[i]);
      }
    } else {
      arrObj[arr[i]] = 1;
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

console.log(deleteNth([20, 37, 20, 21, 21, 21], 2));
