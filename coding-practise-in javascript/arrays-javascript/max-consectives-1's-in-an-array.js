// ================= MaxConsective1's in an Array ===========================
// let arr = [1,1,0,1,1,1,1,0,1,1]
// let n = arr.length
// let MaxConsective1s = 0
// let Count = 0
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         if(arr[j] === 1){
//             Count++
//         }else{
//             break
//         }
//     }
//     MaxConsective1s = Math.max(MaxConsective1s,Count)
//     Count = 0
// }
// console.log(MaxConsective1s)

// ===================== MaxConsective1's in an array Optimal Solution ======================================
// let arr = [1,1,0,1,1,1,1,0,1,1]
// let n = arr.length
// let MaxConsective1s = 0
// let Count = 0
// for(let i=0;i<n;i++){
//     if(arr[i]===0){
//         Count = 0
//     }else{
//         Count++
//         MaxConsective1s = Math.max(MaxConsective1s,Count)
//     }
// }
// console.log(MaxConsective1s)

