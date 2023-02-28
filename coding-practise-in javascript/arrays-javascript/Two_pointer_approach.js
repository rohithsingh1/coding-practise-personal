/*
Given a sorted array and sum,find if there is a pair with given sum
*/

// let arr = [2,5,8,12,30]
// let n = arr.length
// let x = 21
// console.log(TwoPointerApproach(arr,n,x))
// function TwoPointerApproach(arr,n,x){
//     let l = 0
//     let r = n-1
//     while(l<=r){
//         let sum = arr[l] + arr[r]
//         if(sum === x){
//             return true
//         }
//         if(sum < x){
//             l++
//         }else{
//             r--
//         }
//     }
//     return false
// }

/*
 Given a sorted array and a sum,find if there is a triplet with given sum
*/

let arr = [2,3,4,8,9,20,40]
let x = 32
console.log(TripletSum(arr,x))
function TripletSum(arr,x){
    let n = arr.length
    for(let i=0;i<n;i++){
        if(TwoPointerApproach(arr,i+1,n-1,x-arr[i])){
            return true
        }
    }
    return false
}
function TwoPointerApproach(arr,l,r,x){
    while(l<r){
        let sum = arr[l] + arr[r]
        if(sum === x){
            return true
        }
        if(sum < x){
            l++
        }else{
            r--
        }
    }
    return false
}










