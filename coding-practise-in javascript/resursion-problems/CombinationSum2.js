let arr=[2,5,2,1,2]
arr.sort((a, b) => {
    return a-b
})
let temparr=new Array()
let resultArr=new Array()
let target=5
f1(arr, 0,target,temparr)
console.log('resultArr = ', resultArr);


function f1(arr, index,target,temparr) {
    if(index>=arr.length) {
        if(target===0) {
            resultArr.push([...temparr])
        }
        return;
    } else {
        let set1=new Set()
        for(let i=index; i<arr.length; i++){
            if(arr[i]>target) {
                break;
            } else {
                if(!set1.has(arr[i])) {
                    set1.add(arr[i])
                    temparr.push(arr[i])
                    f1(arr, i+1, target-arr[i], temparr)
                    temparr.pop()
                }
            }
        }
        if(target===0) {
            resultArr.push([...temparr])
        }
    }
}








