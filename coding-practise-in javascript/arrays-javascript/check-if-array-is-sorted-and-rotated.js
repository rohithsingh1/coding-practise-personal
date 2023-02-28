// ==================== Check if array is sorted and rotated ================================
/*
Given an array arr[] of N distinct integers, check if this array is Sorted 
(non-increasing or non-decreasing) and Rotated counter-clockwise. 
Note that input array may be sorted in either increasing or decreasing order, then rotated.
A sorted array is not considered as sorted and rotated, 
i.e., there should be at least one rotation.

Approach:
==>Take two variable say x and y, initialized as 0.
==>Now traverse array.
==>If we find previous element is smaller than current, we increase x by one.
==>Else If we find previous element is greater then current we increase y by one.
==>After traversal if any of x and y is not equals to 1, return false.
==>If any of x or y is 1, then compare last element with first element 
    (0th element as current, and last element as previous.) i.e. if last element is greater 
    increase y by one else increase x by one.
==>Again check for x and y if any one is equals to one return true. 
    i.e. Array is sorted and rotated. Else return false.

*/



//=====================method-2(contains duplicates)=================================================
let arr=[2, 2, 3, 4, 5,2]
/*
arr=[1,1,1]=>true
arr=[1,2,3]=>true
arr=[3,2,1]=>false
arr=[6,10,6]=>true
arr=[1,3,2]=>false
*/
let set1=new Set(arr)
let x=0
let y=0
let arr1=Array.from(set1)
if(arr1[arr1.length-1]!==arr[arr.length-1]) {
  arr1.push(arr[arr.length-1])
}
let n = arr1.length
// console.log('arr1 = ',arr1);
for(i=1; i<n; i++){
  if(arr1[i-1]<arr1[i]) {
    x++
  } else {
    y++
  }
}
// console.log('x=', x);
// console.log('y=', y);
// console.log('=====================================')
if(y===1 || y===0) {
  if(arr1[0]>arr1[n-1]) {
    x++
  } 
    else if(arr1[0]<arr1[n-1]) {
    y++
  }
  if(y===1 || y===0) {
    return true
  } else {
    return false
  }
} else {
  return false
}











