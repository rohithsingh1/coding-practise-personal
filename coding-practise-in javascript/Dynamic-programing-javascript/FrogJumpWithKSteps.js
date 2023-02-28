let arr=[40,10,20,70,80,10,20,70,80,60]
let n = arr.length
let resultarr=new Array(n+1)
resultarr.fill(-1)
let k = 4
f1(arr,n-1,k)
console.log('minEnergy = ',resultarr[n-1])

function f1(arr, index,k) {
    if(index===0) {
        return 0;
    } else {
        let minValue=Number.MAX_VALUE
        if(resultarr[index]!==-1) {
            return resultarr[index]
        }
        for(let i=1; i<=k; i++){
            let value;
            if(index>(i-1)) {
                value=f1(arr, index-i, k)+Math.abs(arr[index]-arr[index-i])
                minValue = Math.min(minValue,value)
            } else {
                break;
            }
        }
        resultarr[index] = minValue
        return resultarr[index]
    }
}