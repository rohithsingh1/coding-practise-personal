// ===== Left Rotate the Array by D Times ======================
// let arr = [10,5,30,15]
// let n = arr.length
// let d = 3
// let arr1 = new Array(n)
// for(var i=0;i<(n-d);i++){
//     arr1[i] = arr[d+i]
// }
// for(let j=0;j<d;j++){
//     arr1[i] = arr[j]
//     i++
// }
// console.log(arr1)



// ===== Left Rotate the Array by D Times - OPTIMAL SOLUTION ======================
// function reverse(arr,low,high){
//     while(low<high){
//         let a = arr[low]
//         arr[low] = arr[high]
//         arr[high] = a
//         low++
//         high--
//     }
// }
// var arr = [1,2,3,4,5]
// let n = arr.length
// let d = 4
// d = n - (d % n)
// reverse(arr,0,d-1)
// reverse(arr,d,n-1)
// reverse(arr,0,n-1)
// console.log(arr)