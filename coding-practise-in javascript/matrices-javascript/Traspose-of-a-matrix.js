// ================================= Traspose of a matrix --- Naive Solution ============================================

// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 2
// let count = 2
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


// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         arr1[j][i] = MultiDimensionalarray[i][j]
//     }
// }
// console.log(arr1)


//======================================= Transpose of a matrix --- OPTIMAL SOLUTION =======================================

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
// console.log("Transpose of a matrix  = ",MultiDimensionalarray)

