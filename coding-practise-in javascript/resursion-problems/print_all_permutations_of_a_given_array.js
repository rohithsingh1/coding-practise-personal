let arr=[1, 2, 2]
let resultArr=new Array()
let set2 = new Set()
f1(arr, 0)
console.log('resultarr = ',set2);


function f1(arr, index) {
    if(index>=arr.length) {
        set2.add([...arr])
        return
    } else {
        let containsArray = false
        for(let i=index; i<arr.length; i++){
            let temp=arr[index]
            arr[index]=arr[i]
            arr[i]=temp
            for(let element of set2) {
                if(element.toString()===arr.toString()) {
                    containsArray=true
                    break;
                }
            }
            if(!containsArray) {
                f1(arr, index+1)   
            }
            let temp1=arr[index]
            arr[index]=arr[i]
            arr[i]=temp1
        }
    }
}