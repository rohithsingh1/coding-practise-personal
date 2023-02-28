// ============== Maximum length Even-Odd Subarray in O(n) =====================================
// let arr = [5,10,20,6,3,8]
// let n = arr.length
// let MaxCount = 1
// let Count = 1
// for(let i=1;i<n;i++){
//     if((arr[i-1]%2 === 0)&&(arr[i]%2 === 1)){
//         Count++
//     }else if((arr[i-1]%2 === 1)&&(arr[i]%2 === 0)){
//         Count++
//     }
//     else if( ((arr[i-1]%2 === 0) && (arr[i]%2 === 0)) || ((arr[i-1]%2 === 1) && (arr[i]%2 === 1))){
//         MaxCount = Math.max(MaxCount,Count)
//         Count = 1
//     }
// }
// MaxCount = Math.max(MaxCount,Count)
// console.log(MaxCount)