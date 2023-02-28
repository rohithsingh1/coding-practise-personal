// let str = 'abccbccba'
// console.log(RemoveAdjacentDuplicate(str))
// function RemoveAdjacentDuplicate(str){
//     let str1 = ''
//     while(str.length !== str1.length){
//         str1 = str.slice()
//         str = Duplicates(str1)
//     }
//     return str1
// }
// function Duplicates(arr){
//     let res = new Array()
//     let i=0;
//     let n = arr.length
//     while(i<n){
//         if((i<n-1)&&(arr[i]===arr[i+1])){
//             while((i<n-1)&&(arr[i]==arr[i+1])){
//                 i++
//             }
//         }else{
//             res.push(arr[i])
//         }
//         i++
//     }
//     return res.join('')
// }



let arr = ['I', 'am' ,'john' ,'cena' ,'cena' ,'john']
let n = arr.length
let arr1 = []
while(arr.length !== arr1.length){
    arr1 = arr.slice()
    arr = RemoveDuplicates(arr1)
}
if(arr1.length>0){
    console.log(arr1.join(' '))
}else{
    console.log(-1)
}

function RemoveDuplicates(arr){
    let n = arr.length
    let s = new Array()
    for(let i=0;i<n-1;i++){
        if(s.length === 0){
            let res1 = arr[i].localeCompare(arr[i+1])
            if((i===0)&&(res1!==0)){
                s.push(arr[i])
            }
            let res2 = arr[i].localeCompare(arr[i-1])
            if((i!==0)&&(res1!==0)&&(res2!==0)){
                s.push(arr[i])
            }
        }else{
            let res1 = arr[i].localeCompare(arr[i+1])
            let res2 = arr[i].localeCompare(arr[i-1])
            if((res1!==0)&&(res2!==0)){
                s.push(arr[i])
            }
        }
    }
    let res1 = arr[n-1].localeCompare(arr[n-2])
    if(res1!==0){
        s.push(arr[n-1])
    }
    return s
}













