var str = 'ABSG'.split('')
let i=0
let set1 = new Set()
let res = permute(str,i)
res = Array.from(res)
res.sort(function(a,b){
    return a.localeCompare(b)
})
for(let per of res){
    console.log(per)
}
function permute(str,i){
    if(i === (str.length-1)){
        set1.add(str.join(''))
        return set1
    }else{
        for(let j=i;j<str.length;j++){
            let a = str[i]
            str[i] = str[j]
            str[j] = a
            set1 = permute(str,i+1)
            let b = str[i]
            str[i] = str[j]
            str[j] = b
        }
    }
    return set1
}
//===============================================2nd solution==========================================================
/*
below solution can handle duplicate characters
str = 'AAB'
output : [ 'AAB', 'ABA', 'BAA' ]

*/

let str = 'ABC'
let resultArr=new Array()
let set2 = new Set()
f1(str, 0)
let arr1=Array.from(set2);
arr1.sort((a, b) => {
    return a.localeCompare(b)
})
console.log('arr1 = ',arr1)


function f1(str, index) {
    if(index>=str.length) {
        set2.add(str)
        return
    } else {
        for(let i=index; i<str.length; i++){
            let temparr = str.split('')
            let temp=temparr[index]
            temparr[index]=temparr[i]
            temparr[i]=temp
            str = temparr.join('')
            if(!set2.has(str)) {
                f1(str, index+1)   
            }
            temparr = str.split('')
            let temp1=temparr[index]
            temparr[index]=temparr[i]
            temparr[i]=temp1
            str = temparr.join('')
        }
    }
}












