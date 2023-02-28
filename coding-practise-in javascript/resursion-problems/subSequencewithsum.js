let arr=[10,1,2,7,6,1,5]
let sum=8
let sum1=0
let temparr=new Array()
let set1=new Set()
f1(arr, 0, temparr, sum, sum1)
console.log('set1 = ', set1);



function f1(arr, index, temparr, sum, sum1) {
    if(index>=arr.length) {
        if(sum1===sum) {
            temparr.sort((a, b) => {
                return a-b
            })
            if(!set1.has([...temparr])) {
                set1.add([...temparr])   
            }
        }
        return;
    } else {
        temparr.push(arr[index])
        sum1=sum1+arr[index]
        f1(arr, index+1, temparr, sum, sum1)
        temparr.pop()
        sum1=sum1-arr[index]
        f1(arr, index+1, temparr, sum, sum1)
    }
}

