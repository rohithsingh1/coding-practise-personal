// ====================== Sliding Window Technique ---- Navie Solution =====================================
// let arr = [1,8,30,-5,20,7]
// let n = arr.length
// let k = 2
// let MaxSum = 0
// let Sum = 0
// for(let i=0;i<n;i++){
//     Sum = 0
//     for(let j=0;j<k && (i+k-1)<n;j++){
//         Sum = Sum + arr[i+j]
//     }
//     MaxSum = Math.max(MaxSum,Sum)
// }
// console.log(MaxSum)

// ====================== Sliding Window Technique ---- Optimal Solution =====================================
// let arr = [1,8,30,-5,20,7]
// let n = arr.length
// let k = 2
// let MaxSum = 0
// let Sum = 0
// for(let i=0;i<k;i++){
//     Sum = Sum + arr[i]
// }
// MaxSum = Sum
// for(let i=1;i+k-1<n;i++){
//     Sum = Sum - arr[i-1] + arr[i+k-1]
//     MaxSum = Math.max(MaxSum,Sum)
// }
// console.log(MaxSum)
