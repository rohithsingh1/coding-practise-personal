// ========= Trapping Rain water ======================
// let arr = [3,2,1]
// let n = arr.length
// let res = 0
// let Lmax = new Array(n)
// Lmax[0] = arr[0]
// let Rmax = new Array(n)
// for(let i=1;i<n;i++){
//     Lmax[i] = Math.max(arr[i],Lmax[i-1])
// }
// Rmax[n-1] = arr[n-1]
// for(let i=n-2;i>=0;i--){
//     Rmax[i] = Math.max(arr[i],Rmax[i+1])
// }
// for(let i=1;i<n-1;i++){
//     res = res + Math.min(Lmax[i],Rmax[i]) - arr[i]
// }
// console.log(res)
