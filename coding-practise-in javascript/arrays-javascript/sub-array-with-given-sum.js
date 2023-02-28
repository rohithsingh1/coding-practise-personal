function subarraySum(arr, n, s)
    {
        //your code here
        let left = 0
        let right = 1
        let sum = arr[left] + arr[right]
        while(right < n){
            while(sum > s && left < right){
                sum = sum - arr[left]
                left++
            }
            if(sum === s){
                return [left+1,right+1]
            }
            right++
            sum = sum + arr[right]
        }
        return [-1]
}

let arr=[1, 2, 3, 7, 5]
let n=arr.length
let s=12
console.log(subarraySum(arr,n,s));