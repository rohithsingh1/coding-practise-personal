let arr = [5,8,-3,6]
let sum = 3
console.log(SumOfPairOfElementsInUnsotedArray(arr,sum))
function SumOfPairOfElementsInUnsotedArray(arr,x){
    let set1 = new Set()
    let n = arr.length
    for(let i=0;i<n;i++){
        if(!set1.has(x-arr[i])){
            set1.add(arr[i])
        }else{
            return true
        }
    }
    return false
}