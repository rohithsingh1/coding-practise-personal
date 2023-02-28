let arr=[2,1,4,9,5,3]
let n=arr.length
let maxValue=Number.MIN_VALUE
let resultarr=new Array(n+1)
resultarr[0] = arr[0]
resultarr.fill(-1)
f1(arr, n-1)
console.log('maxsum = ',resultarr[n-1])

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


//======================tabulation method===============================

arr=[2, 1, 4, 9, 5, 3]
n=arr.length
let dp=new Array(n+1)
dp.fill(-1)
dp[0]=arr[0]
for(let index=1; index<n; index++){
    let pick=arr[index]
    if(index>1) {
        pick = pick + dp[index-2]
    }
    let notpick=dp[index-1]
    dp[index] = Math.max(pick,notpick)
}
console.log('maxsumofnonadjacentelements = ',dp[n-1]);











