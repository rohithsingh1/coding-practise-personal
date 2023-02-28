/*
k = 3, n = 4 
arr[][] = { {1, 3, 5, 7}, 
{2, 4, 6, 8}, 
{0, 9, 10, 11}} ;
Output: 0 1 2 3 4 5 6 7 8 9 10 11 
Explanation: The output array is a sorted array that contains all the elements of the input matrix. 

Input: 
k = 4, n = 4 
arr[][] = { {1, 5, 6, 8}, 
{2, 4, 10, 12}, 
{3, 7, 9, 11}, 
{13, 14, 15, 16}} ;
Output: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
Explanation: The output array is a sorted array that contains all the elements of the input matrix. 

Input: k = 3 
      arr[][] = { {1, 3},
                  {2, 4, 6},
                  {0, 9, 10, 11}} ;
Output: 0 1 2 3 4 6 9 10 11 

Input: k = 2
      arr[][] = { {1, 3, 20},
                  {2, 4, 6}} ;
Output: 1 2 3 4 6 20 
*/

let k_sorted_arr = [[1,3],[2,4,6],[0,9,10,11]]
let k = 3
console.log(MergeKArrays(k_sorted_arr,k))
function MergeKArrays(arr,k){
    let temp = arr[0]
    for(let i=1;i<k;i++){
        temp = MergeArrays(arr[i],temp)
    }
    return temp
}
function MergeArrays(arr1,arr2){
    let final_arr = new Array()
    let i=0
    let j=0
    let n = arr1.length
    let m = arr2.length
    while((i<n)&&(j<m)){
        if(arr1[i]<arr2[j]){
            final_arr.push(arr1[i])
            i++
        }else if(arr2[j]<arr1[i]){
            final_arr.push(arr2[j])
            j++
        }else{
            final_arr.push(arr1[i])
            i++
        }
    }
    while(i<n){
        final_arr.push(arr1[i])
        i++
    }
    while(j<m){
        final_arr.push(arr2[j])
        j++
    }
    return final_arr
}
