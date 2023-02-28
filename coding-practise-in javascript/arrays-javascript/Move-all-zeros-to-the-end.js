//======= Move All Zeros to the end ===========
// let arr = [0,0,0,10,0]
// let n = arr.length
// let arr1 = new Array(n)
// arr1.fill(0)
// let j = 0
// for(let i in arr){
//     if(arr[i] !== 0){
//         arr1[j] = arr[i]
//         j++
//     }
// }
// console.log(arr1)

// ================== OPTIMAL SOLUTION =======================================
let arr=[5,11]
let j=-1
for(let i in arr) {
  if(arr[i]!==0) {
    if(j!==-1) {
      arr[j]=arr[i]
      j++
    }
  }
  else {
    if(j===-1) {
      j = i
    }
  }
}
if(j!==-1) {
  arr.fill(0,j)
}
console.log(arr)