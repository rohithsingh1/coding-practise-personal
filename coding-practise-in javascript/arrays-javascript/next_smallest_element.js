/*
Given an array, print the Next Smaller Element (NSE) for every element. 
The NSE for an element x is the first smaller element on the right side of x in array. 
Elements for which no smaller element exist (on right side), consider NSE as -1. 
Examples: 
a) For any array, rightmost element always has NSE as -1. 
b) For an array which is sorted in increasing order, all elements have NSE as -1. 
c) For the input array [4, 8, 5, 2, 25}, the NSE for each element are as follows.

Element         NSE
   4      -->    2
   8      -->    5
   5      -->    2
   2      -->   -1
   25     -->   -1
d) For the input array [13, 7, 6, 12}, the next smaller elements for each element are as follows.  

  Element        NSE
   13      -->    7
   7       -->    6
   6       -->   -1
   12      -->   -1
*/

// =========================================== OPTIMAL SOLUTION ===================================
let arr = [2,5,3,7,1,5,2,6,3,1]
let n = arr.length
console.log(NextSmallest(arr,n))
function NextSmallest(arr,n){
    let stack = new Array()
        for(let i=n-1;i>=0;i--){
            if(stack.length === 0){
                stack.push(arr[i])
                arr[i] = -1
            }else{
                while((stack.length !== 0) && (stack[stack.length-1] >= arr[i])){
                    stack.pop()
                }
                if(stack.length === 0){
                    stack.push(arr[i])
                    arr[i] = -1
                }else{
                    let a = stack[stack.length-1]
                    stack.push(arr[i])
                    arr[i] = a
                }
            }
        }
        return arr
}


















