let arr=[0]
let n=arr.length
let maxValue=Number.MIN_VALUE
let resultarr=new Array(n)
resultarr.fill(-1)
resultarr[0] = arr[0]
f1(arr, n-2)
let max1 = resultarr[n-2]
arr.shift()
n = arr.length
resultarr = new Array(n)
resultarr.fill(-1)
resultarr[0]=arr[0]
f1(arr, n-1)
let max2=resultarr[n-1]
console.log('maxsum = ',Math.max(max1,max2));

function f1(arr, index) {
    if(index===0) {
        return arr[index]
    }
    else if(index<0) {
        return 0;
    } else {
        if(resultarr[index]!==-1) {
            return resultarr[index]
        }
        let pick=arr[index]+f1(arr, index-2)
        let notpick=f1(arr, index-1)
        resultarr[index]=Math.max(pick, notpick)
        return resultarr[index]
    }
    
}






