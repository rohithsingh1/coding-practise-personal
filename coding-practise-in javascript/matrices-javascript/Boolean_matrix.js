let matrix = [
    [1,0,1],
    [1,1,1]
]
let rows = matrix.length
let coloums = matrix[0].length
console.log(booleanMatrix(matrix,rows,coloums))
function booleanMatrix(arr,rows,coloumn){
    let l = new Array()
    for(let i=0;i<rows;i++){
        for(let j=0;j<coloumn;j++){
            if(arr[i][j] === 0){
                l.push([i,j])
            }
        }
    }
    let n1 = l.length
    for(let i=0;i<n1;i++){
        let x = l[i][0]
        arr[x].fill(0)
        let y = l[i][1]
        for(let j=0;j<rows;j++){
            arr[j][y] = 0
        }
    }
    return arr
}
