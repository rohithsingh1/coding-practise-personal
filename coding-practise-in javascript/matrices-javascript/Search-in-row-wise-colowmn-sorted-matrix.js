// ============================= Search in row-wise and coloumn-wise sorted matrix ===================================

// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 4
// let count = 4
// for(let i=0;i<n;i++){
//     MultiDimensionalarray[i] = new Array(count)
//     for(let j=0;j<count;j++){
//         MultiDimensionalarray[i][j] = ++w
//     }
// }
// console.log("input array = ", MultiDimensionalarray)
// let rows = n
// let coloums = count
// let key = 20
// function Element_found(arr,rows,coloums,key){
//     let i = 0
//     while(i<rows){
//         let left = 0
//         let right = coloums-1
//         while(left<=right){
//             let middle = Math.floor((left+right)/2)
//             if(arr[i][middle] === key){
//                 return [i,middle]
//             }
//             if(arr[i][middle] > key){
//                 right = middle-1
//             }else{
//                 left = middle+1
//             }
//         }
//         i++
//     }
//     return -1
// }
// console.log("element found  = ",Element_found(MultiDimensionalarray,rows,coloums,key))


// ==================== Search in row-wise and coloumn-wise sorted matrix ----OPTIMAL SOLUTION =========================

// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 4
// let count = 7
// for(let i=0;i<n;i++){
//     MultiDimensionalarray[i] = new Array(count)
//     for(let j=0;j<count;j++){
//         MultiDimensionalarray[i][j] = ++w
//     }
// }
// console.log("input array = ", MultiDimensionalarray)
// let rows = n
// let coloums = count
// let key = 20
// function Element_found(arr,rows,coloums,key){
//     console.log(MultiDimensionalarray.length)
//     console.log(MultiDimensionalarray[0].length)
//     let i = 0
//     let j = coloums - 1
//     let L = new Array()
//     while(i<rows && j>=0){
//         if(key > arr[i][j]){
//             i++
//         }
//         else if(key < arr[i][j]){
//             j--
//         }
//         else if(key === arr[i][j]){
//             L.push([i,j])
//             return L
//         }
//     }
//     return -1
// }
// console.log("element found  = ",Element_found(MultiDimensionalarray,rows,coloums,key))