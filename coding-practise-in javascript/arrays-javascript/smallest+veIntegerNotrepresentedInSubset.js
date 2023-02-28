/*
================================================= Naive solution ===============================================
*/


let userInput=['8','2 5 7 10 12 150 19']
let arr=userInput[1].split(' ')
let n = arr.length
for(let i=0; i<n; i++){
    arr[i] = parseInt(arr[i],10)
}
let resultSet=new Set()
let tempsum=0
smallestPositive(arr, 0, tempsum)
let min=arr[0]
for(let i=1; i<n; i++){
    min = Math.min(min,arr[i])
}
let target=min
while(resultSet.has(target)) {
    target++
}
//console.log('resultSet = ', resultSet)
console.log(target)
resultSet.clear()
//console.log('resultSet = ', resultSet)

function smallestPositive(arr, index, tempsum) {
    if(index>=arr.length) {
        resultSet.add(tempsum)
        return;
    } else {
        tempsum=tempsum+arr[index]
        smallestPositive(arr, index+1, tempsum)
        tempsum=tempsum-arr[index]
        smallestPositive(arr, index+1, tempsum)
    }
}


/*
============================================= Optimal Solution =======================================================
*/


let arr=userInput[1].split(' ')
let n=arr.length
arr.sort((a, b) => {
    return a-b;
})
console.log(arr)
for(let i=0; i<n; i++){
    arr[i] = parseInt(arr[i],10)
}
let result=smallestPositive(arr, n)
console.log(result)

function smallestPositive(arr, n) {
    //let min=arr[0]
    let res=1
    for(let i=0; i<n; i++){
        if(arr[i]>res) {
            return res;
        } else {
            res = res + arr[i]
        }
    }
    return res
}













