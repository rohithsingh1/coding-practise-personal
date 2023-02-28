//************************************ prefix to postfix expression ************************************ 
//************************************ prefix to infix expression **************************************
let str = '*-A/BC-/AKL'.split('')
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

// ******************************  reversing the prefix expression **************************************
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
let stack = new Array()
let tempstr = ''
//********************** prifix to infix conversion **************************************
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        stack.push(str[i])
    }else{
        let top1 = stack.pop()
        let top2 = stack.pop()
        tempstr = '(' + top1 + str[i] + top2 + ')'
        stack.push(tempstr)
    }
}


// *************************************** infix to postfix **********************************************
str = stack[stack.length-1]
n = str.length
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

console.log(tempstr)