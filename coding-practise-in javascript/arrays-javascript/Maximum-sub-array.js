// =========== Maximum SubArray---Naive Solution =========================
// let arr = [2,3,-8,7,-1,2,3]
// let n = arr.length
// let MaxSum = arr[0]
// for(let i=0;i<n;i++){
//     MaxSum = Math.max(MaxSum,arr[i])
//     let SubSum = arr[i]
//     for(let j=i+1;j<n;j++){
//         SubSum = SubSum + arr[j]
//         MaxSum = Math.max(MaxSum,SubSum)
//     }
// }
// console.log(MaxSum)

// =========== Maximum SubArray---OPTIMAL Solution In O(n) =========================
// let arr = [-6,-1,-8]
// let n = arr.length
// let MaxSum = arr[0]
// let MaxEnding = new Array(n)
// MaxEnding[0] = arr[0]
// for(let i=1;i<n;i++){
//     MaxEnding[i] = Math.max(arr[i],MaxEnding[i-1]+arr[i])
//     MaxSum = Math.max(MaxSum,MaxEnding[i])
// }
// console.log(MaxSum)

