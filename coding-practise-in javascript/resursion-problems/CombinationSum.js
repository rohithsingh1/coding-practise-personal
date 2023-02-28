/*
    input arr = [2,3,6,7], target = 8
    o/p = [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 2, 6 ] ]

    input arr = [2,3,6,7], target = 7
    o/p = [ [ 2, 2, 3 ], [ 7 ] ]

    
 */


let arr=[2, 3, 6, 7]
let temparr=new Array()
let resultArr=new Array()
let target=7
let result = f1(arr, 0,temparr,target)
console.log('resultArr = ', resultArr);


function f1(arr, index,temparr,target) {
    if(index>=arr.length) {
        if(target===0) {
            resultArr.push([...temparr])
        }
        return;
    } else {
        if(target>=arr[index]) {
            temparr.push(arr[index])
            f1(arr, index, temparr, target-arr[index])
            temparr.pop()
        }
        f1(arr, index+1,temparr,target)
    }
}