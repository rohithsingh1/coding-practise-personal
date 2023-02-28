// ===================================== navie solution ================================
// let arr = [100,200,500,1000,2000,10,20]
// let key = 15
// console.log(SearchInSortedRotatedArray(arr,key))
// function SearchInSortedRotatedArray(arr,key){
//     let l = 0
//     let n = arr.length
//     let h = n-1
//     let flag = false
//     while(l<=h){
//         let mid = Math.floor((l+h)/2)
//         if(arr[mid] === key){
//             return mid
//         }else{
//             if(arr[mid]>arr[0]){
//                 if((key>=arr[0])&&(key<=arr[mid-1])){
//                     h = mid-1
//                 }else{
//                     for(let i=mid+1;i<=(n-1);i++){
//                         if(arr[i] === key){
//                             flag = true
//                             return i
//                         }
//                     }
//                     if(!flag){
//                         return -1
//                     }
//                 }
//             }
//             if(arr[mid]<arr[n-1]){
//                 if((key>=arr[mid+1])&&(key<=arr[n-1])){
//                     l = mid+1
//                 }else{
//                     for(let i=0;i<=(mid-1);i++){
//                         if(arr[i]===key){
//                             flag = true
//                             return i
//                         }
//                     }
//                     if(!flag){
//                         return -1
//                     }
//                 }
//             }
//         }
//     }
//     return -1
// }
// ====================================== OPTIMAL SOLUTION =============================
let arr = [100,200,10,20,30,40,50]
let key = 150
console.log(SearchInSortedRotatedArray(arr,key))
function SearchInSortedRotatedArray(arr,key){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let mid = Math.ceil((left+right)/2)
        if(arr[mid]===key){
            return mid
        }
        if(arr[left]<arr[mid]){
            if((key>=arr[left])&&(key<arr[mid])){
                right = mid-1
            }else{
                left = mid+1
            }
        }else{
            if((key>arr[mid])&&(key<=arr[right])){
                left = mid+1
            }else{
                right = mid-1
            }
        }
    }
    return -1
}