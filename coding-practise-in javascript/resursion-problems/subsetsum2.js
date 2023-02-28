let arr=[1, 2, 2, 2, 3, 3]
arr.sort((a, b) => {
    return a-b
})
let resultarr=new Array()
resultarr.push([])
let temparr = new Array()
f1(arr, 0, temparr)
console.log('resultarr = ',resultarr)

function f1(arr, index,temparr) {
    if(index>=arr.length) {
        return;
    } else {
        let set1=new Set()
        for(let i=index; i<arr.length; i++){
            if(!set1.has(arr[i])) {
                set1.add(arr[i])
                temparr.push(arr[i])
                resultarr.push([...temparr])
                f1(arr, i+1, temparr)
                temparr.pop()
            }
        }
    }
}








