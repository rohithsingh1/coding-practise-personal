//let st = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924]
//let et = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252]
let st = [10,12,30]
let et = [20,25,30]
let n = st.length
let arr = new Array()
for(let i=0;i<n;i++){
    let obj = {
        MeetingNO : i+1,
        StartTime : st[i],
        EndTime : et[i] 
    }
    arr.push(obj)
}
console.log("before sorting arr = ",arr)
arr.sort(function(a,b){
    return a.EndTime - b.EndTime
})
console.log("after sorting = ",arr)
let Meetlist = new Array()
Meetlist.push(arr[0].MeetingNO)
let limit = arr[0].EndTime
for(let i=1;i<n;i++){
    if(arr[i].StartTime>limit){
        Meetlist.push(arr[i].MeetingNO)
        limit = arr[i].EndTime
    }
}
console.log(Meetlist.length)