// let A=2
// let B=2
// let C=2
// let BiA=A.toString(2).split('')
// let BiB=B.toString(2).split('')
// let BiC=C.toString(2).split('')
// let Alen=BiA.length
// let Blen=BiB.length
// let Clen=BiC.length
// let max=Math.max(Alen, Blen)
// max=Math.max(max, Clen)
// let lenDiff=max-Alen
// for(let i=0; i<lenDiff; i++){
//     BiA.unshift(0)
// }
// lenDiff=max-Blen
// for(let i=0; i<lenDiff; i++){
//     BiB.unshift(0)
// }
// lenDiff=max-Clen
// for(let i=0; i<lenDiff; i++){
//     BiC.unshift(0)
// }
// let count0=0
// let count1 = 0
// for(let i=0; i<max; i++){
//     if(BiA[i]==0) {
//         count0++
//     } else {
//         count1++
//     }
//     if(BiB[i]==0) {
//         count0++
//     } else {
//         count1++
//     }
//     if(BiC[i]==0) {
//         count0++
//     } else {
//         count1++
//     }
//     console.log('count0 = ', count0)
//     console.log('count1 = ',count1)
//     if(count0>count1) {
//         BiA[i]=Number(BiA[i])^1
//         BiB[i]=Number(BiB[i])^1
//         BiC[i]=Number(BiC[i])^1
//     }
//     if(count1>count0) {
//         BiA[i]=Number(BiA[i])^0
//         BiB[i]=Number(BiB[i])^0
//         BiC[i]=Number(BiC[i])^0
//     }
//     count0=0
//     count1=0
// }
// console.log('BiA = ', BiA)
// console.log('BiB = ', BiB)
// console.log('BiC = ',BiC)
// const parseArray = arr => {
//    const binaryString = arr.join("");
//    return parseInt(binaryString, 2);
// };
// BiA=parseArray(BiA)
// BiB=parseArray(BiB)
// BiC = parseArray(BiC)


// let sum=BiA+BiB+BiC
// console.log('sum = ',sum);





// let inputArray=[ '5 1 2 -3', '-1 -2 -3 -4 -5' ]
// let arr1=inputArray[0].split(' ')
// let arr2=inputArray[1].split(' ')
// let n = arr2.length
// for(let i=0; i<n; i++){
//     arr2[i] = Number(arr2[i])
// }
// let p=Number(arr1[1])
// let q=Number(arr1[2])
// let r = Number(arr1[3])
// var L=new Array(n)
// L.fill(0)
//         L[0] = p * arr2[0];
//         for (i = 1; i < n; i++)
//             L[i] = Math.max(L[i - 1], p * arr2[i]);
 
//         // Compute right maximum for every index.
// var R=new Array(n)
//         R.fill(0)
//         R[n - 1] = r * arr2[n - 1];
//         for (i = n - 2; i >= 0; i--)
//             R[i] = Math.max(R[i + 1], r * arr2[i]);
 
//         // Traverse through the whole array to
//         // maximize the required expression.
//         var ans = Number.MIN_VALUE;
//         for (i = 0; i < n; i++)
//     ans=Math.max(ans, L[i]+q*arr2[i]+R[i]);
            
// console.log('ans = ', ans);














