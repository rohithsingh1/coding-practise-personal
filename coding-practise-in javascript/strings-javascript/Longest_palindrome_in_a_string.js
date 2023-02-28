// ======================   Naive Solution =================

// let str = 'forgeeksskeegfor'.split('')
// let n = str.length
// console.log(LongestPalindrome(str,n))
// function LongestPalindrome(arr,n){
//     let maxlength = -1
//     let map1 = new Map()
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let res = palindrome(arr,i,j)
//             //console.log("res = ",res)
//             //maxlength = Math.max(maxlength,res.length)
//             if(res.length > maxlength){
//                 maxlength = res.length
//                 map1.set(res.length,{
//                     firstindex:res.index1,
//                     secondindex:res.index2
//                 })
//             }
//             //console.log("map1 = ",map1)
//         }
//     }
//     let resobj = map1.get(maxlength)
//     //console.log("resobj =",resobj)
//     return arr.slice(resobj.firstindex,resobj.secondindex+1).join('')
//     //return resobj.secondindex - resobj.firstindex + 1
// }

// function palindrome(arr,l,r){
//     let index1 = l
//     let index2 = r
//    while(index1<index2){
//     if(arr[index1]!==arr[index2]){
//         return {length:-1}
//     }
//     index1++
//     index2--
//    }
//    //console.log("length = ",r-l+1)
//    return {
//     length : r-l+1,
//     index1: l,
//     index2: r
//    }
// }

// =============================================== OPTIMAL SOLUTION ====================================================



let str = 'abcd'.split('')
let n = str.length
console.log(LongestPalindrome(str,n))
function LongestPalindrome(arr,n){
    let DP_arr = new Array()
    let map1 = new Map()
    let maxlength = 0
    for(let i=0;i<n;i++){
        DP_arr[i] = new Array(n)
        for(let j=0;j<n;j++){
            if(i === j){
                DP_arr[i][j] = 1
                if(1>maxlength){
                    maxlength = 1
                    map1.set(maxlength,{
                        index1:i,
                        index2:j
                    })
                }
            }
        }
    }
    for(let i=0;i<n-1;i++){
        if(arr[i]===arr[i+1]){
            DP_arr[i][i+1] = 1
            if(2 > maxlength){
                maxlength = 2
                map1.set(maxlength,{
                    index1:i,
                    index2:i+1
                })
            }
        }else{
            DP_arr[i][i+1] = 0
        }
    }
    let len = 2
    while(len<n){
        let l = 0
        let r = len
        while((l<n)&&(r<n)){
            if((arr[l]===arr[r])&&(DP_arr[l+1][r-1]===1)){
                DP_arr[l][r] = 1
                if((r-l+1)>maxlength){
                    maxlength = r-l+1
                    map1.set(maxlength,{
                        index1:l,
                        index2:r
                    })
                }
            }else{
                DP_arr[l][r] = 0
            }
            l++
            r++
        }
        len++
    }
    let resobj = map1.get(maxlength)
    return arr.slice(resobj.index1,resobj.index2+1).join('')
}

