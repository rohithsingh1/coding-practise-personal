
let arr = '[()]{}{[()()]()}'.split('')
let n = arr.length
let res = IsValidExpres(arr,n)
if(res){
    console.log("yes")
}else{
    console.log("no")
}

function IsValidExpres(arr,n){
    let s = new Array()
    let map1 = new Map()
    map1.set('{','}')
    map1.set('[',']')
    map1.set('(',')')
    if(n<=1){
        return false
    }else{
        for(let i=0;i<n;i++){
            if((arr[i]==='{')||(arr[i]==='[')||(arr[i]==='(')){
                s.push(arr[i])
            }else{
                if(s.length > 0){
                    let TopEle = s[s.length-1]
                    let closbrac = map1.get(TopEle)
                    if(arr[i]===closbrac){
                        s.pop()
                    }else{
                        return false
                    }
                }else{
                    return false
                }
            }
        }
        if(s.length>0){
            return false
        }else{
            return true
        }
    } 
}



/*

let str = '[(])'.split('')
let n = str.length
console.log(CheckParanthesis(str,n))
function CheckParanthesis(str,n){
    let map1 = new Map()
    map1.set('}','{')
    map1.set(')','(')
    map1.set(']','[')
    let s = new Array()
    for(let i=0;i<n;i++){
        if(map1.has(str[i])){
            let ele = map1.get(str[i])
            if(s[s.length-1]===ele){
                s.pop()
            }else{
                return false
            }
        }else{
            s.push(str[i])
        }
    }
    if(s.length>0){
        return false
    }else{
        return true
    }
}


*/


