// ========== STOCK BUY AND SELL =================================
// const arr = [30,20,10]
// const n = arr.length
// var buy = arr[0]
// var profit = 0
// for(let i=1;i<n-1;i++){
//     if((arr[i]>arr[i+1])&&(arr[i]>buy)){
//         profit = profit + arr[i] - buy
//         buy = arr[i+1]
//     }
//     if((arr[i]<arr[i-1])&&(arr[i]<arr[i+1])){
//         buy = arr[i]
//     }
// }
// if((arr[n-1]>arr[n-2])&&(arr[n-1]>buy)){
//     profit = profit + arr[n-1] - buy
// }
// console.log(profit)

// =========== STOCK BUY AND SELL---- OPTIMAL SOLUTION ===============================
// const arr = [30,20,10]
// const n = arr.length
// var profit = 0
// for(let i=1;i<n;i++){
//     if(arr[i]>arr[i-1]){
//         profit = profit + arr[i] - arr[i-1]
//     }
// }
// console.log(profit)

// ============ STOCK BUY AND SELL---- OPTIMAL SOLUTION ===============================
// let arr=[1,5,5,3,3,8,12,12]
// let n=arr.length
// let profit=0
// let buy=arr[0]
// for(let i=1; i<n-1; i++){
//   if((arr[i]>arr[i-1])&&(arr[i]>=arr[i+1])) {
//     profit = profit + arr[i] - buy
//   }
//   if((arr[i]<=arr[i-1])&&(arr[i]<arr[i+1])) {
//     buy = arr[i]
//   }
// }
// if(arr[n-1]>arr[n-2]) {
//   profit = profit + arr[n-1] - buy
// }
// console.log('profit = ',profit)



//======= STOCK BUY AND SELL OTHER PROBLEM ==========================

function buysell(arr, n) {
    let i=0
    let profitArr = []
    let buyStock = []
    while(i<n-1) {
        if(i===0 && (i+1)<n) {
            if(arr[i]<arr[i+1]) {
                buyStock.push([arr[i],i])
            }
        }
        else {
            if((arr[i]>arr[i-1])&&(arr[i]>=arr[i+1])) {
                profitArr.push([buyStock[0][1], i])
                buyStock.splice(0)
            }
            if((arr[i]<=arr[i-1])&&(arr[i]<=arr[i+1])) {
                if(buyStock.length===0) {
                    buyStock.push([arr[i],i])
                } else {
                    buyStock[0] = [arr[i],i]
                }
            }
        }
        i++
    }
    if(buyStock.length>0) {
        if(arr[n-1]>=buyStock[0][0]) {
            profitArr.push([buyStock[0][1],n-1])
        }
        return profitArr
    } else {
        return profitArr
    }
}

let arr=[57,69,12,59,5,9,29,29,99]
let n=arr.length
console.log(buysell(arr,n))



