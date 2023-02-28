// ======================================= Maps() in javascript ===========================================
// const contacts = new Map()
// contacts.set('rohith-jio',{phone:'7901427367'})
// contacts.set('rohith-bsnl',{phone:"7901427367"})
// contacts.set('geetha',{phone:"9491820467"})
// console.log(contacts.has('rohith-jio'))
// console.log(contacts.has('karthik-jio'))
// console.log(contacts.get('rohith-bsnl'))
// console.log(contacts.delete('rohith-bsnl'))
// console.log(contacts.size)
// console.log(contacts)
// let map_keys = contacts.keys()
// let map_values = contacts.values()
// console.log(map_keys)
// console.log(map_values)
// for(let [key,value] of contacts){
//     console.log(key,value)
// }
// console.log("====================")
// contacts.forEach(function(value,key){
//     console.log(key,value)
// })
// let map_entries = contacts.entries()
// console.log(map_entries)
// for(let [key,value] of map_entries){
//     console.log(key,value)
// }


// ============================================ sets() in javascript ===========================================

// let myset = new Set()
// myset.add(1)
// myset.add(5)
// myset.add(5)
// myset.add(2)
// myset.add(20)
// console.log(myset)
// console.log(myset.has(5))
// console.log(myset.has(4))
// console.log(myset.size)
// // console.log(myset.delete(20))
// let set_keys = myset.keys()
// console.log(set_keys)
// let set_values = myset.values()
// console.log(set_values)
// console.log("=========================")
// for(let i of myset){
//     console.log(i)
// }

let setA = new Set([1,2,3,4,5,6])
let setB = new Set([1,2,5,7,8])
console.log(isSuperSet(setA,setB))
console.log("union of two sets = ",UnionOfSets(setA,setB))
console.log("intersection of two sets = ",InteresctionOfSets(setA,setB))
console.log("symmetric_difference of sets",SymmetricDifferenceOfSets(setA,setB))
console.log("difference of sets = ",DifferencesOfSets(setA,setB))
function isSuperSet(setA,setB){
    for(let ele of setB){
        if(!setA.has(ele)){
            return false
        }
    }
    return true
}
function UnionOfSets(setA,setB){
    let union = new Set(setA)
    for(let ele of setB){
        union.add(ele)
    }
    return union
}
function InteresctionOfSets(setA,setB){
    let intersection = new Set()
    for(let ele of setB){
        if(setA.has(ele)){
            intersection.add(ele)
        }
    }
    return intersection
}
function SymmetricDifferenceOfSets(setA,setB){
    let symmetric_difference = new Set(setA)
    for(let ele of setB){
        if(symmetric_difference.has(ele)){
            symmetric_difference.delete(ele)
        }else{
            symmetric_difference.add(ele)
        }
    }
    return symmetric_difference
}
function DifferencesOfSets(setA,setB){
    let difference  = new Set(setA)
    for(let ele of setB){
        if(difference.has(ele)){
            difference.delete(ele)
        }
    }
    return difference
}
