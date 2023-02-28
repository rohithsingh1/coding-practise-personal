// ======= Max-Difference of Arr[j]-Arr[i] and j>i =======================
// let arr = [30,10,8,2]
// var maxdiff = arr[1] - arr[0]
// var min = arr[0]
// for(let i=1;i<arr.length;i++){
//     maxdiff = Math.max(maxdiff,arr[i]-min)
//     min = Math.min(min,arr[i])
// }
// console.log(maxdiff)


//=============== other solution =====================================
let arr=[10,20,30]
let n=arr.length
let temp_max=arr[1]
let temp_min=arr[0]
let max_diff=Number.MIN_SAFE_INTEGER
for(let k=1; k<n; k++){
  temp_max=arr[k]
  if((k-1)>=0&&arr[k-1]<temp_min) {
    temp_min = arr[k-1]
  }
  max_diff= Math.max(max_diff,temp_max-temp_min)
}
console.log('max_diff = ',max_diff);