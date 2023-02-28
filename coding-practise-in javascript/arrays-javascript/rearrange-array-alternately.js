// ======================================= Rearrange Array Alternately =====================================
/*
Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively 
i.e first element should be max value, second should be min value, third should be second max, 
fourth should be second min and so on.
Note: Modify the original array itself.
*/

function rearrange(arr, n){
    // code here
    let min = 0
    let max = n-1
    let max1 = Number(arr[n-1]) + 1
    for(let i=0;i<n;i++){
        if(i%2 === 0){
            arr[i] = arr[i] + (arr[max]%max1)*max1
            max--
        }
        if(i%2 === 1){
            arr[i] = arr[i] + (arr[min]%max1)*max1
            min++
        }
    }
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(arr[i]/max1)
    }
    return arr
}

let arr = [1,2,3,4,5,6]
let n = arr.length
console.log(rearrange(arr,n))
