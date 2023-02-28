
// ===================================== Naive Solution ====================================================
// let arr = [1,2,3,4]
// let n = arr.length
// let k = 2
// let count = 0
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         let res = CountSubArray(arr,i,j,k)
//         if(res){
//             count++
//         }
//     }
// }
// console.log(count)
// function CountSubArray(arr,l,r,k){
//     let max = arr[l]
//     for(let i=l;i<=r;i++){
//         max = Math.max(max,arr[i])
//     }
//     if(max>k){
//         return true
//     }else{
//         return false
//     }
// }

// ==================================================== OPTIMAL SOLUTION ============================================

let arr = [56,8,9,4,3,25,16,1,4,97,46,31]
let n = arr.length
let k = 9
let count = 0
let DParr = new Array(n)
for(let i=0;i<n;i++){
    DParr[i] = new Array(n)
    DParr[i].fill(0)
    for(let j=0;j<n;j++){
        if(i===j){
            if(arr[i]>k){
                DParr[i][j] = 1
                count++
            }
        }else{
            DParr[i][j] = 0
        }
    }
}
for(let i=0;i<n-1;i++){
    if(arr[i]>arr[i+1]){
        if(arr[i]>k){
            DParr[i][i+1] = 1
            count++
        }else{
            DParr[i][i+1] = 0
        }
    }else{
        if(arr[i+1]>k){
            DParr[i][i+1] = 1
            count++
        }else{
            DParr[i][i+1] = 0
        }
    }
}
let len = 2
while(len<n){
    let l = 0
    let r = len
    while((l<n)&&(r<n)){
        if((arr[r]>k)||(DParr[l][r-1]===1)){
            DParr[l][r] = 1
            count++
        }
        l++
        r++
    }
    len++
}
console.log(count)