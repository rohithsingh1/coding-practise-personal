
// ======================================== OPTIMAL SOLUTION ===============================================

let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
let A2 = [99, 22, 444, 56]
let n1 = A1.length
let n2 = A2.length
console.log(sortA1ByA2(A1,A2,n1,n2))
function sortA1ByA2(A1,A2,n1,n2){
    let map1 = new Map()
    A1.sort(function(a,b){
        return a-b
    })
    //console.log("A1 = ",A1)
    for(let i=0;i<n1;i++){
        if(map1.has(A1[i])){
            map1.set(A1[i],map1.get(A1[i])+1)
        }else{
            map1.set(A1[i],1)
        }
    }
    //console.log("map1 = ",map1)
    let index = 0
    for(let i=0;i<n2;i++){
        if(map1.has(A2[i])){
            let count = Number(map1.get(A2[i]))
            let j = 0
            while(j<count){
                A1[index] = Number(A2[i])
                index++
                j++
            }
            //console.log("inside if stmt A1 = ",A1)
            map1.delete(A2[i])
        }
    }
    //console.log("partially sorted A1 W.R.T A2 is = ",A1)
    //console.log("map1 = ",map1)
    //console.log("index = ",index)
    for(let [keys,values] of map1){
        let i = 0
        let count = values
        while(i<count){
            A1[index] = keys
            i++
            index++
        }
    }
    //console.log("fully sorted A1 W.R.T A2 is = ",A1)
    return A1
}