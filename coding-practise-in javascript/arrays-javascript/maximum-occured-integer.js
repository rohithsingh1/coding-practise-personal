// ========================= Maximum occured integer ============================================
/*
Given n integer ranges, the task is to find the maximum occurring integer in these ranges. 
If more than one such integer exits, find the smallest one. The ranges are given as two arrays L[] and R[].  
L[i] consists of starting point of range and R[i] consists of corresponding end point of the range.

For example consider the following ranges.
L[] = {2, 1, 3}, R[] = {5, 3, 9)
Ranges represented by above arrays are.
[2, 5] = {2, 3, 4, 5}
[1, 3] = {1, 2, 3}
[3, 9] = {3, 4, 5, 6, 7, 8, 9}
The maximum occurred integer in these ranges is 3.
*/

// function maxOccured(L, R, n, maxx){
//     let arr = new Array(maxx+2)
//     arr.fill(0)
//     for(let i=0;i<n;i++){
//         arr[L[i]]++
//         arr[R[i]+1]--
//     }
//     let n1 = arr.length
//     for(let i=1;i<n1;i++){
//         arr[i] = arr[i] + arr[i-1]
//     }
//     let index = 0
//     let max = arr[0]
//     for(let i in arr){
//         if(arr[i]>max){
//             max = arr[i]
//             index = i
//         }
//     }
//     return index
// }

// let L = [1,4,3,1]
// let R = [15,8,5,4]
// let n = L.length
// let maxx = 15
// console.log(maxOccured(L,R,n,maxx))

