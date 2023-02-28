// ============================= Smallest Positive missing number ====================================
/*
You are given an array arr[] of N integers including 0. 
The task is to find the smallest positive number missing from the array.
*/

// function missingNumber(arr, n)
//     {
//         //your code here
//         let max_value = arr[0]
//         for(let i=1;i<n;i++){
//             if(arr[i]>max_value){
//                 max_value = arr[i]
//             }
//         }
//         let arr1 = new Array(max_value+2)
//         arr1.fill(0)
//         for(let i in arr){
//             if(arr[i]>=1){
//                 arr1[arr[i]]++
//             }
//         }
//         let index
//         for(let i=1;i<arr1.length;i++){
//             if(arr1[i]===0){
//                 index = i
//                 break;
//             }
//         }
//         return index
//     }

// let arr = [0,-10,1,3,-20]
// let n = arr.length
// console.log(missingNumber(arr,n))
