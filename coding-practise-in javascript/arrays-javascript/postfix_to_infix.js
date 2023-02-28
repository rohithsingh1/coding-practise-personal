function IsOperand(x){
    if((x>='a'&&x<='z')||(x>='A'&&x<='Z')){
        return true
    }else{
        return false
    }
}
let str = 'ab*c+'.split('')
let n = str.length
let s = new Array()
for(let i=0;i<n;i++){
    if(IsOperand(str[i])){
        s.push(str[i])
    }else{
        let top1 = s.pop()
        let top2 = s.pop()
        let str1 = ''+top2+str[i]+top1
        s.push(str1)
    }
}
console.log(s[s.length-1])