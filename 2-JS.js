const arr = ["abc:15", "pqr:35", "xyz:25","pqr:25"]
    // console.log(arr)
const len = arr.length

for(let i=0;i<len; i++){

    for(let j=0;j<len-1;j++){


        const num1 = arr[j].split(':')
        const num2 = arr[j+1].split(':')
        
        const numValue1 = Number(num1[1])
        const numValue2 = Number(num2[1])

        // console.log(numValue1,numValue2)

        if(numValue1>numValue2){

            const temp = arr[j]
            arr[j] = arr [j+1]
            arr[j+1] = temp
            // [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
}
console.log("sorted Array =", arr)

