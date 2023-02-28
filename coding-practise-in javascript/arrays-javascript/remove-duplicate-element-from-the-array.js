//====== Remove Duplicate Element from the array ==========
// let arr = [20,10,20,8,10,8,12]
// let freq = {}
// for(let i in arr){
//     let char = arr[i]
//     if(freq[char]){
//         freq[char] = freq[char] + 1
//     }else{
//         freq[char] = 1
//     }
// }
// let keys = Object.keys(freq)
// console.log(keys)



let arr = [10,20,20,30,30,30,30,20]
let set1 = new Set(arr)
arr.splice(0)
arr = [...Array.from(set1)]
console.log(arr)