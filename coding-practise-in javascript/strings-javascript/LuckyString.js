let str='aaabbb'
let n=str.length
let count = 0
for(let i=1; i<n-1; i++){
    if((str[i]===str[i-1])&&(str[i]===str[i+1])) {
        count++
    }
}
console.log('count = ',count);