/*
Given 2 numbers N and K followed by N elements, 
find the Kth smallest element.If the element cannot be found then print -1

INPUT
5 2
1 1 2 4 5
OUTPUT
2

INPUT
5 4
1 1 1 1 5
OUTPUT
-1
*/


let arr = [1,1,1,1,5]
let dict = {}
let k = 4
let n = arr.length
for(let i=0;i<n;i++){
    if(!dict[arr[i]]){
        dict[arr[i]] = 1
    }
}
arr = Object.keys(dict)
n = arr.length
console.log(arr)
console.log(QuickSort(arr,0,n-1,k))
function QuickSort(arr,p,r,k){
    while(p<=r){
        let q = partition(arr,p,r)
        if((k-1)>q){
            p = q+1
        }else if((k-1)<q){
            r = q-1
        }else{
            return arr[q]
        }
    }
    return -1
}

function partition(arr,p,q){
    let pivot = arr[p]
    let i = p
    for(let j=p+1;j<=q;j++){
        if(arr[j]<=pivot){
            i = i+1
            let a = arr[i]
            arr[i] = arr[j]
            arr[j] = a
        }
    }
    let a = arr[p]
    arr[p] = arr[i]
    arr[i] = a
    return i
}


