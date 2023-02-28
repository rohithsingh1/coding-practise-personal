/*
Maxwell wants to buy an apartment in a new house at Line Avenue of Metropolis. The house has n apartments 
that are numbered from 1 to n and are arranged in a row. Two apartments are adjacent if their indices differ by 1. 
Some of the apartments can already be inhabited, others are available for sale. Maxwell often visits his neighbors, 
so apartment is good for him if it is available for sale and there is at least one already inhabited 
apartment adjacent to it. Maxwell knows that there are exactly k already inhabited apartments, 
but he doesn't know their indices yet. Find out what could be the minimum possible 
and the maximum possible number of apartments that are good for Maxwell.
Input Size : N<=K<=1000000000

input1
6 3
output
1 3

input2
6 1
output
1 2

input2
6 2
output
1 4

*/


let userInput=['6 3']
let numarr=userInput[0].split(' ')
let n=parseInt(numarr[0], 10)
let k=parseInt(numarr[1],10)
let arr=new Array(n)
arr.fill(0)
let arr1=new Array(2)
arr1.fill(0)
if(k<n) {
    arr1[0]=1
    let i=0
    let count=Math.min(n-k,2*k)
    arr1[1] = count
}
console.log(arr1.join(' '));




