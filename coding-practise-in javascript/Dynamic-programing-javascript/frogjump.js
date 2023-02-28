let arr=[30, 10, 60, 10, 60, 50]
let n = arr.length
let resultarr=new Array(n+1)
resultarr.fill(-1)
f1(arr,n-1)
console.log('minEnergy = ',resultarr[n-1])

function f1(arr, index) {
    if(index===0) {
        return 0;
    } else {
        if(resultarr[index]!==-1) {
            return resultarr[index]
        }
        let left, right=Number.MAX_VALUE
        left=f1(arr, index-1)+Math.abs(arr[index]-arr[index-1])
        if(index>1) {
            right = f1(arr,index-2) + Math.abs(arr[index]-arr[index-2])
        }
        resultarr[index]=Math.min(left, right)
        return resultarr[index]
    }
}