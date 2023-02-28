//================================= Maximum Index ======================================
/*
Given an array A[] of N positive integers. The task is to 
find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.

N = 9
A[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
Output:
6
Explanation:
In the given array A[1] < A[7]
satisfying the required 
condition(A[i] < A[j]) thus giving 
the maximum difference of j - i 
which is 6(7-1).
*/

// =============================== Navie solution ==================================

// let arr = [34,8,10,3,2,80,30,33,1]
// let n = arr.length
// console.log(maxIndexDiff(arr,n))
// function maxIndexDiff(arr, n)
// {
//     let max_diff = -1
//     let flag = false
//     for(let i=n-1;i>=0;i--){
//         for(let j=0;j<i;j++){
//             if(arr[j]<=arr[i]){
//                 if((i-j)>max_diff){
//                     max_diff = i-j
//                 }
//                 flag = true
//             }
//         }
//     }
//     if(n!==1){
//         if(flag){
//             return max_diff
//         }else{
//             return 0
//         }
//     }else{
//         return 0
//     }
// }



// =============================== OPTIMAL SOLUTION ======================================

let arr = [6,5,4,3,2,1]
let n = arr.length
console.log(maxIndexDiff(arr,n))

function maxIndexDiff(arr, n)
    {
        let Larr = new Array(n)
        let Rarr = new Array(n)
        Larr[0] = arr[0]
        for(let i=1;i<n;i++){
            Larr[i] = Math.min(arr[i],Larr[i-1])
        }
        Rarr[n-1] = arr[n-1]
        for(let j=n-2;j>=0;j--){
            Rarr[j] = Math.max(arr[j],Rarr[j+1])
        }
        let i=0
        let j=0
        let max_diff = -1
        while(i<n && j<n){
            if(Larr[i] <= Rarr[j]){
                max_diff = Math.max(max_diff,j-i)
                j++
            }else{
                i++
            }
        }
        return max_diff
    }




















