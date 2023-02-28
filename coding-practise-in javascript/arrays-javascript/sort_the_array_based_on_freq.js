

let arr = [-1,1,-6,4,5,-6,1,4,1]
let n = arr.length
let dict = {}
for(let i=0;i<n;i++){
    if(dict[arr[i]]){
        dict[arr[i]]++
    }else{
        dict[arr[i]] = 1
    }
}
let temp = new Array()
for(let i in dict){
    temp.push([Number(i),dict[i]])
}
temp.sort(function(a,b){
    if(a[1]<b[1]){
        return -1
    }
    if(a[1]>b[1]){
        return 1
    }
    if(a[1]===b[1]){
        if(a[0]<b[0]){
            return 1
        }
        if(a[0]>b[0]){
            return -1
        }else{
            return 0
        }
    }
})
arr.splice(0)
let index = 0
let len = temp.length
for(let i=0;i<len;i++){
    let count = 0
    while(count<temp[i][1]){
        arr[index] = temp[i][0]
        index++
        count++
    }
}
console.log(arr.join(' '))
