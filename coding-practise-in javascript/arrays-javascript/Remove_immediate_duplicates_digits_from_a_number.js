/*
arr = [1,2,9,9,8,8,8,8,3,3,2,2,2]
o/p = 12

arr = [1,3,3,3,1]
o/p = 11

arr = [1,1,1,2,2]
o/p = -1

*/

let arr = [1,2,9,9,8,8,8,8,3,3,2,2,2]
let n = arr.length
for(let i=0;i<n;i++){
    arr[i] = Number(arr[i])
}
console.log(RemoveImmediateDuplicates(arr,n))
function RemoveImmediateDuplicates(arr,n){
    let s = new Array()
    for(let i=0;i<n-1;i++){
        if(s.length === 0){
            if((i===0)&&(arr[i]!==arr[i+1])){
                s.push(arr[i])
            }
            if((i!==0)&&(arr[i]!==arr[i+1])&&(arr[i]!==arr[i-1])){
                s.push(arr[i])
            }
        }else{
            if((arr[i]!==arr[i+1])&&(arr[i]!==arr[i-1])){
                s.push(arr[i])
            }
        }
    }
    if(arr[n-1]!==arr[n-2]){
        s.push(arr[n-1])
    }
    if(s.length>0){
        return s.join('')
    }else{
        return -1
    }
}
