// =============== Majority Element in an Array -- Optimal Solution ====================================
// let arr = [8,8,6,6,6,4,6]
// let n = arr.length
// let freq = {}
// let MaxCount = 0
// for(let i=0;i<n;i++){
//     let char = arr[i]
//     if(freq[char]){
//         freq[char] = freq[char] + 1
//     }else{
//         freq[char] = 1
//     }
//     MaxCount = Math.max(MaxCount,freq[char])
// }
// let MajorityElementIndex = 0
// for(let i=0;i<n;i++){
//     if(freq[arr[i]] === MaxCount){
//         MajorityElementIndex = i
//         break
//     }
// }
// let n1 = Math.floor(n/2)
// if(MaxCount>n1){
//     console.log(MajorityElementIndex)
// }else{
//     console.log(-1)
// }
