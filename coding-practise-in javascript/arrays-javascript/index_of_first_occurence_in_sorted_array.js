let arr = [20,20,20,20,20,20,20]
let n = arr.length
let left = 0
let right = n-1
let key = 20
let flag = false
while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]>key){
        right = mid-1
    }else if(arr[mid]<key){
        left = mid+1
    }else{
        if((mid===0)||(arr[mid]!==arr[mid-1])){
            //return mid
            console.log(mid)
            flag = true
            break
        }else{
            right = mid-1
        }
    }
}
if(!flag){
    console.log(-1)
}
