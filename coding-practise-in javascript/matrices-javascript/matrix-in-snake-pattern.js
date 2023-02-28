// ============================== matrix in snake pattern =============================================
/*
input = arr = [[1,2,3],[4,5,6],[7,8,9]]
output = 1 2 3 6 5 4 7 8 9

input array =  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]
output = 1 2 3 6 5 4 7 8 9 12 11 10
*/
// let w = 0
// let MultiDimensionalarray = new Array()
// let n = 4
// let count = 3
// for(let i=0;i<n;i++){
//     MultiDimensionalarray[i] = new Array(n)
//     for(let j=0;j<n;j++){
//         MultiDimensionalarray[i][j] = ++w
//     }
// }
// console.log("input array = ", MultiDimensionalarray)
// let j = 0
// let str = ""
// for(let i=0;i<n;i++){
//     if(i%2 === 0){
//         j = 0
//         for(let k=j;k<count;k++){
//             str = str + MultiDimensionalarray[i][k].toString() + " "
//         }
//     }else{
//         j = count-1
//         for(let k=j;k>=0;k--){
//             str = str + MultiDimensionalarray[i][k].toString() + " "
//         }
//     }
// }
// console.log(str.trimEnd())
