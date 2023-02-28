let arr=[3,1,4]
let resultArr=new Array()
let tempsum = 0
f1(arr, 0, tempsum)
resultArr.sort((a, b) => {
    return a-b
})
console.log('resultArr = ', resultArr);


function f1(arr, index,tempsum) {
    if(index>=arr.length) {
        resultArr.push(tempsum)
        return;
    } else {
        tempsum=tempsum+arr[index]
        f1(arr, index+1, tempsum)
        tempsum=tempsum-arr[index]
        f1(arr,index+1,tempsum)
    }
}








