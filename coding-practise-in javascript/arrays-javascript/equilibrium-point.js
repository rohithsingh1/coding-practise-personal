// ================================ Equilibrium Point ===============================================
/*
Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array. 
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the 
sum of elements after it.
Note: Retun the index of Equilibrium point. (1-based index)
*/

// function equilibriumPoint(a, n)
//     {
//         //your code here
//         let left = 0
//         let right = n-1
//         let l_sum = a[left]
//         let r_sum = a[right]
//         while(left<right){
//             if(l_sum === r_sum){
//                 let abs_diff = Math.abs(right-left)
//                 if(abs_diff === 2){
//                     return left+2
//                 }else{
//                     left++
//                     l_sum = l_sum + a[left]
//                     right--
//                     r_sum = r_sum + a[right]
//                 }
//             }
//             else if(l_sum<r_sum){
//                 left++
//                 l_sum = l_sum + a[left]
//             }
//             else if(l_sum>r_sum){
//                 right--
//                 r_sum = r_sum + a[right]
//             }
//         }
//         if(n!==1){
//             return -1
//         }else{
//          return 1   
//         }
//     }
// let A = [5,2,3,4,3,1,10,4,5,9]
// let n = A.length
// console.log(equilibriumPoint(A,n))

