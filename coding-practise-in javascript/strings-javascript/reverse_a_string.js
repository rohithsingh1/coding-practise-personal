/*
Given a string as input, you have to reverse the string 
by keeping the punctuation and spaces intact. You have to modify the source
string itself without creating another string.

Sample Input :
A man, in the boat says : I see 1-2-3 in the sky

Sample Output :
y kse, ht ni3 21ee sIsy : a sta o-b-e ht nin amA
*/

let PM = ".?!,:;_-()' '[]{}\\|''/@#$%^&*+=`~<>".split("")
let PM1 = new Set(PM)
let str = "A man, in the boat says : I see 1-2-3 in the sky".split("")
console.log(ReverseTheString(str,PM1))
function ReverseTheString(str,PM1){
    let l = 0
    let r = str.length-1
    while(l<r){
        if((!PM1.has(str[l]))&&(!PM1.has(str[r]))){
            let a = str[l]
            str[l] = str[r]
            str[r] = a
            l++
            r--
        }
        if(PM1.has(str[l])){
            l++
        }
        if(PM1.has(str[r])){
            r--
        }
    }
    return str.join("")
}
