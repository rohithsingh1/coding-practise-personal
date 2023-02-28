//======================================= OPTIMAL SOLUTION ==================================================

let str1 = 'abcabcabcd'
let str2 = 'abcd'
console.log(IsSubString(str1,str2))
function IsSubString(str1,str2){
    let n1 = str1.length
    let n2 = str2.length
    let count = 0
    let j = 0
    let index
    let i = 0
    while(i<n1){
        if(str1[i]===str2[j]){
            let k = i
            while((j<n2)&&(k<n1)&&(str1[k]===str2[j])){
                index = k
                k++
                j++
                count++
            }
            if(count === n2){
                return index-count+1
            }
            count = 0
            j = 0
        }
        i++
    }
    return -1
}
