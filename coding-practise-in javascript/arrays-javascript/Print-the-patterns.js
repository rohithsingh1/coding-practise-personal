// Printing the pattern
/*
*
* *
* * *
* * * *
* * * * *
*/
// let str = "*"
// let n = 5
// for(let i=1;i<=n;i++){
//     let str1 = str.repeat(i).split("").join(" ")
//     console.log(str1)
// }


/*
* * * * *
* * * *
* * *
* *
*
*/
// let str = "*"
// let n = 5
// for(let i=n;i>=1;i--){
//     let str1 = str.repeat(i).split("").join(" ")
//     console.log(str1)
// }

/*
         *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *
*/
// let str = "*"
// let n = 5
// let j = 1
// let str1 = ""
// for(let i=1;i<=n;i++){
//     let n1 = (n-i)*2 + 1
//     str1 = "".padStart(n1, ' ') + str.repeat(j).split("").join(" ")
//     console.log(str1)
//     j = j + 2
//     str1 = ""
// }



/*
* * * * * * *
  * * * * *
    * * *
      *
*/
// let str = "*"
// let n = 4
// let j = 1
// let str1 = ""
// let arr1 = new Array(n)
// for(let i=0;i<n;i++){
//     arr1[i] = j
//     j = j + 2
// }
// let k = 0
// for(let i=n-1;i>=0;i--){
//     str1 = "".padStart(k, ' ') + str.repeat(arr1[i]).split("").join(" ")
//     console.log(str1)
//     k = k + 2
//     str1 = ""
// }


/*
rows = 5
1
12
1 3
1  4
12345

rows = 4
1
12
1 3
1234

rows = 3
1
12
123
*/
// let rows = 5
// if(rows === 1){
//   let w = 1
//   console.log(w)
// }else{
//   let w = 1
//   console.log(w)
//   let str = ''
//   for(let i=1;i<(rows-1);i++){
//     w = 1
//     str = ''
//     for(let j=0;j<=i;j++){
//       str = str + w
//       for(let k=0;k<(i-1);k++){
//         j++
//         str = str + ' '
//         w++
//       }
//       w++
//     }
//     console.log(str.trim())
//   }
//   w = 1
//   str = ''
//   for(let i=0;i<rows;i++){
//     str = str + w
//     w++
//   }
//   console.log(str.trim())
// }


let rows = 5
if(rows === 1){
  console.log(1)
}
else if(rows === 2){
  console.log(12)
  console.log(1)
}else{
  let w = 1
  let str = ''
  for(let i=0;i<rows;i++){
    str = str + w
    w++
  }
  console.log(str)
  for(let i=rows-1;i>=2;i--){
    w = 1
    str = ''
    for(let j=0;j<i;j++){
      str = str + w
      for(let k=0;k<(i-1);k++){
        w++
        j++
        str = str + ' '
      }
    }
    console.log(str)
  }
  console.log(1)
}





















