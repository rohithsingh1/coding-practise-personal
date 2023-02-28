// ======================== Spiral Traversal of a Matrix --- OPTIMAL SOLUTION ================================================

// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 4
// let count = 5
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
//     let top = 0
//     let botton = N-1
//     let left = 0
//     let right = M-1
//     while((top<botton)&&(left<right)){
//         for(i=left;i<=right;i++){
//             str = str + MultiDimensionalarray[top][i].toString() + " "
//         }
//         top++
//         for(i=top;i<=botton;i++){
//             str = str + MultiDimensionalarray[i][right].toString() + " "
//         }
//         right--
//         for(i=right;i>=left;i--){
//             str = str + MultiDimensionalarray[botton][i].toString() + " "
//         }
//         botton--
//         for(i=botton;i>=top;i--){
//             str = str + MultiDimensionalarray[i][left].toString() + " "
//         }
//         left++
//     }
//     console.log("top = ",top)
//     console.log("bottom = ",botton)
//     console.log("left = ",left)
//     console.log("right = ",right)
//     if(left === right){
//         for(i=top;i<=botton;i++){
//             str = str + MultiDimensionalarray[i][left].toString() + " "
//         }
//     }
//     if(top === botton){
//         for(i=left;i<=right;i++){
//             str = str + MultiDimensionalarray[top][i].toString() + " "
//         }
//     }
// }
// console.log("print spiral traversal of a matrix = ",str)