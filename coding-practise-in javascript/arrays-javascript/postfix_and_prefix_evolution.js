/*

//prefix expression evolution by using stack

let str = '-+7*45+20'.split('')
let n = str.length
let s = new Array()
let res = 0
function IsOperand(x){
    if(x>='0' && x<='9'){
        return true
    }else{
        return false
    }
}
function Evaluate(x,top1,top2){
    let res = 0
    if(x === '/'){
        res = Math.floor(top1/top2)
    }
    if(x === '+'){
        res = top1 + top2
    }
    if(x === '-'){
        res = top1 - top2
    }
    if(x === '*'){
        res = top1*top2
    }
    if(x === '^'){
        res = top1^top2
    }
    return res
}
for(let i=n-1;i>=0;i--){
    if(IsOperand(str[i])){
        s.push(Number(str[i]))
    }else{
        let top1 = s.pop()
        let top2 = s.pop()
        res = Evaluate(str[i],top1,top2)
        s.push(res)
    }
}
console.log(s[s.length-1])

*/


/*

//postfix expression evolution

function IsOperand(x){
    if(x>='0' && x<='9'){
        return true
    }else{
        return false
    }
}
function Evaluate(x,top1,top2){
    let res = 0
    if(x === '/'){
        res = Math.floor(top2/top1)
    }
    if(x === '+'){
        res = top2+ top1
    }
    if(x === '-'){
        res = top2 - top1
    }
    if(x === '*'){
        res = top2*top1
    }
    if(x === '^'){
        res = top2^top1
    }
    return res
}
let str = '18-6*3-8+88-*'.split('')
let n = str.length
console.log(EvaluatePostfixExpression(str,n))
function EvaluatePostfixExpression(str,n){
    let res = 0
    let s = new Array()
    for(let i=0;i<n;i++){
        if(IsOperand(str[i])){
            s.push(Number(str[i]))
        }
        else{
            if(s.length>=2){
                let top1 = s.pop()
                let top2 = s.pop()
                res = Evaluate(str[i],top1,top2)
                s.push(res)
            }else{
                return -1
            }
        }
    }
    if(s[s.length-1]=== -0){
        return 0
    }else{
        return s[s.length-1]
    }
}


*/

