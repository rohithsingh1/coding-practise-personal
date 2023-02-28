let userInput=['5', '2 7 3 9 4']
let numarr = userInput[1].split(' ')

let lcm=parseInt(numarr[0], 10)
for(let i=1; i<numarr.length; i++){
    let num = parseInt(numarr[i],10)
    lcm = (lcm*num)/GCD(lcm,num)
}

console.log(lcm);
function GCD(num1,num2) {
    let numsqrt1=Math.ceil(Math.sqrt(num1))
    let numsqrt2=Math.ceil(Math.sqrt(num2))
    let max1=Math.max(numsqrt1, numsqrt2)
    let gcd=1
    let i=2
    while(i<max1) {
        while((num1%i===0)&&(num2%i===0)) {
            gcd=gcd*i
            num1=num1/i
            num2=num2/i
        }
        i++
    }
    return gcd
}

