// ============ Maximum Circular SubArray Sum----Navie Solution ===============================================
// let arr = [-8,7,6]
// let n = arr.length
// let MaxEnding = 0
// let MaxSum = 0
// for(let i=n-1;i>=0;i--){
//     MaxEnding = arr[i]
//     MaxSum = Math.max(MaxSum,MaxEnding)
//     for(let j=((i+1)%n);j!==i;j=((j+1)%n)){
//         MaxEnding = Math.max(MaxEnding+arr[j],arr[j])
//         MaxSum = Math.max(MaxSum,MaxEnding)
//     }
// }
// console.log(MaxSum)



// ============ Maximum Circular SubArray Sum----OPTIMAL Solution ===============================================
// let arr = [3,-4,5,6,-8,7]
// let n = arr.length
// console.log(circularSubarraySum(arr,n))
// function circularSubarraySum(arr, N){
//     // code here
//     let sum = arr[0]
//     let max_sum_1 = arr[0]
//     for(let i=1;i<N;i++){
//         sum = Math.max(arr[i],sum+arr[i])
//         max_sum_1 = Math.max(max_sum_1,sum)
//     }
//     sum = arr[0]
//     let min_sum = arr[0]
//     for(let i=1;i<N;i++){
//         sum = Math.min(arr[i],sum+arr[i])
//         min_sum = Math.min(min_sum,sum)
//     }
//     let total_sum = 0
//     for(let i=0;i<N;i++){
//         total_sum = total_sum + arr[i]
//     }
//     let max_sum_2 = total_sum - min_sum
//     if(N!==1){
//         if(max_sum_2 === 0){
//             return max_sum_1
//         }else{
//             return Math.max(max_sum_1,max_sum_2)
//         }
//     }else{
//         return arr[0]
//     }
// }
