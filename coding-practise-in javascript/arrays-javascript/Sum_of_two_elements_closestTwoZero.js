let arr = [1,60,-10,70,-80,85]
let n = arr.length
console.log(ClosestToZero(arr,n))
function ClosestToZero(arr,n){
    if(n === 1){
        return arr[0]
    }else{
        let left = 0
        let right = n-1
        arr.sort(function(a,b){
            return a-b
        })
        //console.log("arr = ",arr)
        let minsum = arr[left]+arr[right]
        while(left<right){
            let sum = arr[left] + arr[right]
            if(Math.abs(sum)<Math.abs(minsum)){
                minsum = sum
            }
            if(Math.abs(sum) === Math.abs(minsum)){
                minsum = Math.max(minsum,sum)
            }
            if(sum<0){
                left++
            }else{
                right--
            }
        }
        return minsum
    }
}
