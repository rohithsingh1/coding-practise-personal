let str = '(X+Y*Z/W+U)'.split('')
let n = str.length
let map1 = new Map()
map1.set('(',')')
map1.set(')','(')
let l = 0
let r = n-1
function IsOperand(x){
    if((x>='a'&&x<='z')||(x>='A'&&x<='Z')){
        return true
    }else{
        return false
    }
}
function GetPriority(x){
    if((x==='-')||(x==='+')){
        return 1
    }
    if((x==='*')||(x==='/')){
        return 2
    }
    if(x==='^'){
        return 3
    }
    return 0
}
// reversing the expression
while(l<=r){
    if(map1.has(str[l])){
        str[l] = map1.get(str[l])
    }
    if((l!==r)&&(map1.has(str[r]))){
        str[r] = map1.get(str[r])
    }
    let a = str[l]
    str[l] = str[r]
    str[r] = a
    l++
    r--
}

// convering the reversed expression to reversed prefix expression 
let s = new Array()
let str1 = ''
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        str1 = str1 + str[i]
    }else{
        if(str[i]==='('){
            s.push(str[i])
        }else if(str[i]===')'){
            while(s[s.length-1]!=='('){
                str1 = str1 + s.pop()
            }
            s.pop()
        }else{
            let str1pri = GetPriority(str[i])
            while(GetPriority(s[s.length-1])>=str1pri){
                str1 = str1 + s.pop()
            }
            s.push(str[i])
        }
    }
}
while(s.length>0){
    str1 = str1 + s.pop()
}

// converting the reversed prefix expression to prefix expression
console.log(str1.split('').reverse().join(''))