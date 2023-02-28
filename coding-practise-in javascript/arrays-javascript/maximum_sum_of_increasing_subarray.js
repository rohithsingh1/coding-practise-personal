/*

increasing subarray = subarray such that every element in the subarray 
is strictly greater than its previous element in the same subarray

*/
let arr = [5,4,3,2,1]
let n = arr.length
console.log(SumOfIncreasingSubArray(arr,n))
function SumOfIncreasingSubArray(arr,n){
    let subsum = arr[0]
    let maxsubsum = arr[0]
    for(let i=1;i<n;i++){
        if(arr[i]>arr[i-1]){
            subsum = subsum + arr[i]
            maxsubsum = Math.max(maxsubsum,subsum)
        }else{
            subsum = arr[i]
        }
    }
    maxsubsum = Math.max(maxsubsum,subsum)
    return maxsubsum
}
