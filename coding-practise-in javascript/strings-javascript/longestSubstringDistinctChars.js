// ================================  Naive solution =============================================

// let str = 'aaa'.split('')
// let n = str.length
// let maxlength = 0
// for(let i=0;i<n;i++){
//     for(let j=i;j<n;j++){
//         let length = longestSubstrDistinctChars(str,i,j)
//         if(length>maxlength){
//             maxlength = length
//         }
//     }
// }
// console.log(maxlength)
// function longestSubstrDistinctChars(arr,l,r){
//     let set1 = new Set()
//     for(let i=l;i<=r;i++){
//         if(!set1.has(arr[i])){
//             set1.add(arr[i])
//         }else{
//             break
//         }
//     }
//     return set1.size
// }

//================================================== OPTIMAL SOLUTION ===============================================

let str = 'aewergrththy'
console.log(longestSubstrDistinctChars(str))
function longestSubstrDistinctChars(arr){
        let map1 = new Map()
        let l=0
        let r=0
        let n = arr.length
        let maxlength = 0
        while((l<n)&&(r<n)){
            if(map1.has(arr[r])){
                let index = map1.get(arr[r])
                if(index >= l){
                    l = index + 1
                }
            }
             map1.set(arr[r],r)
             maxlength = Math.max(maxlength,r-l+1)
            r++
        }
        return maxlength
  }


