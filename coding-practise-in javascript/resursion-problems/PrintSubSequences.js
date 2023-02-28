
let subsequencearr=new Array()
let temparr=new Array()
let arr=[3, 1, 2]
let result = subSequence(arr, 0, temparr)
console.log('result = ',result);

function subSequence(arr, Index, temparr) {
    if(Index>=arr.length) {
        subsequencearr.push([...temparr])
        return subsequencearr;
    } else {
        temparr.push(arr[Index])
        subsequencearr=subSequence(arr, Index+1, temparr)
        temparr.pop()
        subsequencearr=subSequence(arr, Index+1, temparr)
    }
    return subsequencearr
}