let arr = [20,20,20,20,20,20]
let key = 20
console.log(CountOccu(arr,key))
function CountOccu(arr,key){
    let first = FirstOccu(arr,key)
    if(first === -1){
        return 0
    }else{
        let last = LastOccu(arr,key)
        return last-first+1
    }
}
function FirstOccu(arr,key){
    let n = arr.length
    let left = 0
    let right = n-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]>key){
            right = mid-1
        }else if(arr[mid]<key){
            left = mid+1
        }else{
            if((mid===0)||(arr[mid]!==arr[mid-1])){
                return mid
            }else{
                right = mid-1
            }
        }
    }
    return -1
}
function LastOccu(arr,key){
    let n = arr.length
    let left = 0
    let right = n-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]>key){
            right = mid-1
        }else if(arr[mid]<key){
            left = mid+1
        }else{
            if((mid === (n-1))||(arr[mid]!==arr[mid+1])){
                return mid
            }else{
                left = mid+1
            }
        }
    }
    return -1
}












