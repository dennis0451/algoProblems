function VersionCompare(version1, version2) {
//   let splitV1 = version1.split(".");
//   let v1Array = splitV1.map((num) => parseInt(num));
//   let splitV2 = version2.split(".");
//   let v2Array = splitV2.map((num) => parseInt(num));


//   if (v1Array[0] < v2Array[0]) {
//     return -1;
//   }
//   if (v1Array[0] > v2Array[0]) {
//     return 1;
//   }

//   if (v1Array.length < v2Array.length) {
//     for (let i = 0; i < v2Array.length; i++) {
//       if (v1Array[0] === v2Array[0]) {
            
//       }
//     }


//   return v2Array;
 let splitV1 = version1.split(".").map(Number);
 let splitV2 = version2.split(".").map(Number);
 let length = Math.max(splitV1.length, splitV1.length);
 console.log(splitV1)
 for (let i = 0; i < length; i++) {
   let v1Part = splitV1[i] || 0;
   let v2Part = splitV2[i] || 0;
   if (v1Part < v2Part) return -1;
   if (v1Part > v2Part) return 1;
 }
 return 0;
}

console.log(VersionCompare("2.1.2.1", "2.1.0"));

export function VersionCompare(version1, version2) {
  //Insert your code here

  let splitV1 = version1.split(".");
  let v1Array = splitV1.map((num) => parseInt(num));
  let splitV2 = version2.split(".");
  let v2Array = splitV2.map((num) => parseInt(num));

  let length = Math.max(splitV1.length, splitV1.length);
  console.log(splitV1);
  for (let i = 0; i < length; i++) {
    let v1Part = splitV1[i] || 0;
    let v2Part = splitV2[i] || 0;
    if (v1Part < v2Part) return -1;
    if (v1Part > v2Part) return 1;
  }
  return 0;
}
