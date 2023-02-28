// ================================ Matrix Boundary traversal ============================================

// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 3
// let count = 2
// for(let i=0;i<n;i++){
//     MultiDimensionalarray[i] = new Array(count)
//     for(let j=0;j<count;j++){
//         MultiDimensionalarray[i][j] = ++w
//     }
// }
// console.log("input array = ", MultiDimensionalarray)

// let N = n
// let M = count
// let i=0
// let j=0
// let str = ""
// if(N===1){
//     for(j=0;j<M;j++){
//         str = str + MultiDimensionalarray[N-1][j].toString() + " "
//     }
// }else if(M===1){
//     for(i=0;i<N;i++){
//         str = str + MultiDimensionalarray[i][M-1].toString() + " "
//     }
// }else{
//     i = 0
//     j = 0
//     for(j=0;j<M;j++){
//         str = str + MultiDimensionalarray[0][j].toString() + " "
//     }
//     for(i=1;i<N;i++){
//         str = str + MultiDimensionalarray[i][M-1].toString() + " "
//     }
//     for(j=M-2;j>=0;j--){
//         str = str + MultiDimensionalarray[N-1][j].toString() + " "
//     }
//     for(i=N-2;i>=1;i--){
//         str = str + MultiDimensionalarray[i][0].toString() + " "
//     }
// }
// console.log("print boundary traversal = ",str)