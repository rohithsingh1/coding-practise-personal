let arr = [1,1,1,1,0,1,1,1,1,1]
let n = arr.length
let s = new Array()
let l = new Array(n)
l.fill(0)
let j = 0
s.push([arr[0],1])
for(let i=1;i<n;i++){
    let res = s[s.length-1][0]
    while((s.length>0)&&(arr[i] >= s[s.length-1][0])){
        s.pop()
    }
    if(s.length === 0){
        s.push([arr[i],i+1])
    }
    res = s[s.length-1]
    if((s[s.length-1][0] > arr[i])&&(s[s.length-1][1] < (i+1))){
        j++
        l[j] = s[s.length-1][1]
        s.push([arr[i],i+1])
    }
}
//console.log(l.join(' '))
let r = new Array(n)
r.fill(0)
j = n-1
s.splice(0)
s.push([arr[n-1],n])
for(let i=n-2;i>=0;i--){
    while((s.length > 0)&&(arr[i] >= s[s.length-1][0])){
        s.pop()
    }
    if(s.length === 0){
        s.push([arr[i],i+1])
    }
    if((s[s.length-1][0] > arr[i])&&(s[s.length-1][1] > (i+1))){
        j--
        r[j] = s[s.length-1][1]
        s.push([arr[i],i+1])
    }
}
//console.log(r.join(' '))
let max = 0
for(let i=0;i<n;i++){
    max = Math.max(max,l[i]*r[n-1-i])
}
console.log(max)
