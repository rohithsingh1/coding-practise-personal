function IsOperand(x){
    if((x >= 'a' && x <= 'z')||(x >= 'A' && x <= 'Z')){
        return true
    }else{
        return false
    }
}
function getPriority(x){
    if((x === '+')||(x === '-')){
        return 1
    }
    if((x === '*')||(x === '/')){
        return 2
    }
    if(x === '^'){
        return 3
    }
    return 0
}
let str = '(a+b)*c/d-e'.split('')
let n = str.length
let s = new Array()
let tempstr = []
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        tempstr.push(str[i])
    }
    else if(str[i]==='('){
        s.push(str[i])
    }
    else if(str[i]===')'){
        while(s[s.length-1]!=='('){
            let res = s.pop()
            tempstr.push(res)
        }
        s.pop()
    }
    else{
        let strelepri = getPriority(str[i])
        while((s.length > 0)&&(getPriority(s[s.length-1]) >= strelepri)){
            let res = s.pop()
            //console.log("tempstr before push = ",tempstr.join(''))
            tempstr.push(res)
            //console.log("tempstr after push = ",tempstr.join(''))
        }
        if(s.length === 0){
            s.push(str[i])
        }else{
            if(getPriority(s[s.length-1]) < strelepri){
                s.push(str[i])
            }
        }
    }
}
while(s.length > 0){
    let res = s.pop()
    tempstr.push(res)
}
console.log(tempstr.join(''))