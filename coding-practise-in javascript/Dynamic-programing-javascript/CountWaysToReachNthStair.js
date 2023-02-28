let count = 0
let n=6
let temparr=new Array(n+1)
temparr.fill(0)
temparr[0]=1
temparr[1]=1
for(let i=2; i<=n; i++){
    temparr[i] = temparr[i-1] + temparr[i-2]
}
console.log('count = ',temparr[n])
// let result =  f1(n)
// console.log('result = ',result);


// function f1(index) {
//     if((index===0)||(index===1)) {
//         return 1;
//     } else {
//         let l=f1(index-1)
//         let r=f1(index-2)
//         return l+r;
//     }
// }