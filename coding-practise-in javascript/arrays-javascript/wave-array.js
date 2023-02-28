
/*
Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

If there are multiple solutions, find the lexicographically smallest one.
*/

function waveArray(arr, n) {
    let i=1
    while(i<n-1) {
        if(arr[i]>=arr[i-1]) {
            let temp=arr[i]
            arr[i]=arr[i-1]
            arr[i-1]= temp
        }
        if(i+1<n&&arr[i]>=arr[i+1]) {
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1] = temp
        }
        i = i + 2
    }
    return arr
}

let arr=[1, 2, 3, 4, 5]
let n = arr.length
console.log(waveArray(arr,n))




