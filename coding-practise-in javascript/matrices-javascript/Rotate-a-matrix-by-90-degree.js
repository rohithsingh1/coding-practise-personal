// ========================= Rotate a Matrix by 90 degree --- Naive Solution ===========================================

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


// let arr1 = new Array()
// for(let i=0;i<n;i++){
//     arr1[i] = new Array(n)
//     for(let j=0;j<n;j++){
//         arr1[i][j] = 0
//     }
// }

// let i=0
// let j=0
// let p=0
// for(j=n-1;j>=0;j--){
//     for(i=0;i<n;i++){
//         arr1[p][i] = MultiDimensionalarray[i][j]
//     }
//     p++
// }
// console.log("rotated the matrix by 90 degree = ",arr1)


// ==================================== Rotate the array by 90 degree ----- OPTIMAL SOLUTION ===========================

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

// let j = 0
// for(let i=0;i<n;i++){
//     for(let k=j;k<n;k++){
//         if(i!==k){
//             let a = MultiDimensionalarray[i][k]
//             MultiDimensionalarray[i][k] = MultiDimensionalarray[k][i]
//             MultiDimensionalarray[k][i] = a
//         }
//     }
//     j++
// }
// //console.log("Transpose of a matrix  = ",MultiDimensionalarray)

// let i=0
// j = 0
// let p = n-1
// let n1 = Math.floor(n/2)
// for(i=0;i<n1;i++){
//     for(j=0;j<n;j++){
//         let a = MultiDimensionalarray[i][j]
//         MultiDimensionalarray[i][j] = MultiDimensionalarray[p][j]
//         MultiDimensionalarray[p][j] = a
//     }
//     p--
// }
// console.log("Rotated the matrix by 90 degree = ",MultiDimensionalarray)