/*
Given an array of positive integers. Find the length of the longest sub-sequence such that 
elements in the subsequence are consecutive integers, 
the consecutive numbers can be in any order.

Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:
The consecutive numbers here
are 1, 2, 3, 4, 5, 6. These 6 
numbers form the longest consecutive
subsquence.
*/

// =================================================== OPTIMAL SOLUTION - 1 ======================================
// let arr = [2,6,1,9,4,5,3]
// let N = arr.length
// console.log(findLongestConseqSubseq(arr,N))
// function findLongestConseqSubseq(arr, N){
//     // code here
//     let max = arr[0]
//     for(let i=1;i<N;i++){
//         max = Math.max(max,arr[i])
//     }
//     let n1 = max+1
//     let arr1 = new Array(n1)
//     arr1.fill(false)
//     for(let i=0;i<N;i++){
//         arr1[arr[i]] = true
//     }
//     let count = 0
//     let maxcount = 0
//     for(let i=0;i<n1;i++){
//         if(arr1[i]){
//             count++
//             maxcount = Math.max(maxcount,count)
//         }else{
//             count = 0
//         }
//     }
//     maxcount = Math.max(maxcount,count)
//     return maxcount
// }


// ========================================= OPTIMAL SOLUTION -2 ====================================================


let arr = [1,6,5,3,2,4,10,12]
let N = arr.length
console.log(findLongestConseqSubseq(arr))
function findLongestConseqSubseq(arr1){
    // code here
    let arr = new Set(arr1)
    let res = 1
    for(let i of arr){
        if(!arr.has(i-1)){
            let count = 1
            while(arr.has(i+count)){
                count++
            }
            res = Math.max(res,count)
        }
    }
    return res
}



















