// ============================== finding the peak element---Naive Solution ======================================
let arr = [50,40,30,20,10]
let n = arr.length
console.log(FindPeakElement(arr,n))
function FindPeakElement(arr,n){
    if(n===1){
        return arr[0]
    }
    if(n===2){
        if(arr[0]>=arr[1]){
            return arr[0]
        }else{
            return arr[1]
        }
    }
    else{
        let str = ""
        if(arr[0]>arr[1]){
            str = str + arr[0] + " "
        }
        for(let i=1;i<n-1;i++){
            if((arr[i]>=arr[i-1])&&(arr[i]>=arr[i+1])){
                str = str + arr[i] + " "
            }
        }
        if(arr[n-1]>arr[n-2]){
            str = str + arr[n-1] + " "
        }
        return str
    }
}