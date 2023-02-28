let arr = [2,4,1,6,3,7,8]
let n = arr.length
console.log(MissingNumber(arr,n))
function MissingNumber(arr,n){
    let x1 = arr[0]
    let x2 = 1
    for(let i=1;i<n;i++){
        x1 = x1^arr[i]
    }
    for(let i=2;i<=(n+1);i++){
        x2 = x2^i
    }
    return x1^x2
}