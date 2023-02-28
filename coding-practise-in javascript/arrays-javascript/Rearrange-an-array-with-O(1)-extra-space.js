// ===================== Rearrange an array with O(1) extra space ============================
/*
Given an array arr[] of size N where every element is in the range from 0 to n-1. 
Rearrange the given array so that arr[i] becomes arr[arr[i]].

N = 5
arr[] = {4,0,2,1,3}
Output: 3 4 2 0 1
Explanation: 
arr[arr[0]] = arr[4] = 3.
arr[arr[1]] = arr[0] = 4.
and so on.
*/

let arr = [4,0,2,1,3]
let n = arr.length
console.log(arrange(arr,n))
function arrange(arr, n){
    // code here
    for(let i=0;i<n;i++){
        arr[i] = arr[i] + (arr[arr[i]]%n)*n
    }
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(arr[i]/n)
    }
    return arr
}