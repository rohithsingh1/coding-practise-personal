//====== 1st,2nd,3rd Largest Elements form array in O(n) =========
// let arr = [20,20,20,20,20]
// let max1 = -1
// let max2 = -1
// let max3 = -1
// for(let i in arr){
//     if((arr[i]>max1)&&(arr[i]!=max1)){
//         max3 = max2
//         max2 = max1
//         max1 = arr[i]
//     }else if((arr[i]>max2)&&(arr[i]!=max1)&&(arr[i]!=max2)){
//         max3 = max2
//         max2 = arr[i]
//     }else if((arr[i]>max3)&&(arr[i]!=max1)&&(arr[i]!=max2)&&(arr[i]!=max3)){
//         max3 = arr[i]
//     }
// }
// console.log("1st largest element = ",max1);
// console.log("2st largest element = ",max2);
// console.log("3st largest element = ",max3);