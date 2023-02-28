function IsOperand(x){
    if((x >= 'a' && x <= 'z')||(x >= 'A' && x <= 'Z')||(x >= '0' && x <= '9')){
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
let str = '123/-15/6-*'.split('')
let n = str.length
let stack = new Array()
let tempstr = ''
//********************** postfix to infix conversion **************************************
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        stack.push(str[i])
    }else{
        let top1 = stack.pop()
        let top2 = stack.pop()
        tempstr = '(' + top2 + str[i] + top1 + ')'
        stack.push(tempstr)
    }
}

// ********************** infix to prefix conversation *************************************************
str = stack[stack.length-1]
str = str.split('')
n = str.length
let l = 0
let r = n-1
let map1 = new Map()
map1.set('(',')')
map1.set(')','(')
map1.set('{','}')
map1.set('}','{')
map1.set('[',']')
map1.set(']','[')

// ******************************  reversing the infix expression **************************************
while(l < r){
    if(map1.has(str[l])){
        str[l] = map1.get(str[l])
    }
    if(map1.has(str[r])){
        str[r] = map1.get(str[r])
    }
    let a = str[l]
    str[l] = str[r]
    str[r] = a
    l++
    r--
}

// ********************************** reversed infix expression to prefix expression ****************************
let s = new Array()
tempstr = ''
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        tempstr += str[i]
    }
    else if(str[i] === '('){
        s.push(str[i])
    }
    else if(str[i] === ')'){
        while(s[s.length-1]!=='('){
            tempstr += s.pop()
        }
        s.pop()
    }else{
        let currelepri = getPriority(str[i])
        while((getPriority(s[s.length-1]) >= currelepri)){
            tempstr += s.pop()
        }
        s.push(str[i])
    }
}
while(s.length > 0){
    tempstr += s.pop()
}

// ******************************** obtained reversed prefix expression is converted to prefix expression ***********
console.log(tempstr.split('').reverse().join(''))