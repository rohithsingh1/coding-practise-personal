// ==================== Minimum Consective Flips --- Navie Solution ====================================
// let arr = [0,1]
// let n = arr.length
// let is_true_0 = false
// let is_true_1 = false
// let freq = {}
// freq[0] = 0
// freq[1] = 0
// for(let i=0;i<n;i++){
//     if(arr[i]===0){
//         is_true_0 = true
//         if(is_true_1){
//             freq[1] = freq[1] + 1
//             is_true_1 = false
//         }
//     }
//     if(arr[i]===1){
//         is_true_1 = true
//         if(is_true_0){
//             freq[0] = freq[0] + 1
//             is_true_0 = false
//         }
//     }
// }
// if(is_true_0){
//     freq[0] = freq[0] + 1
// }
// if(is_true_1){
//     freq[1] = freq[1] + 1
// }
// let min = Math.min(freq[0],freq[1])
// let k = 0
// if(freq[0] === min){
//     k = 0
// }
// if(freq[1] === min){
//     k = 1
// }
// if(min === 0){
//     console.log(min)
// }else{
//     for(let i=0;i<n;i++){
//         if(arr[i]===k){
//             console.log(i)
//         }
//     }
// }


// ==================== Minimum Consective Flips --- Optimal Solution ====================================
// let arr = [0,1]
// let n = arr.length
// let a1 = arr[0]
// let include0 = arr.includes(0)
// let include1 = arr.includes(1)
// if(!include0){
//     console.log(0)
// }
// else if(!include1){
//     console.log(0)
// }
// else{
//     for(let i=0;i<n;i++){
//         if(arr[i]!== a1){
//             console.log(i)
//         }
//     }
// }
