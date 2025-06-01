//input  - [2,3,4,5,7,1] total - 10
//output - [1,4]

const input = [2,3,4,5,7,1];
const total = 10
let len = input.length
let firstIndex = 0
let secondIndex = 1

const findIndex = () => {
for(let i = 0; i<len; i++){
    firstIndex = i
    for(let j = 0; j<len; j++ ){
        if(input[i] + input[j] === total){
          secondIndex = j 
          return [1, 2];
        }
    }
}
  return "not found"
}
findIndex(console.log(findIndex))


////////////////////////////////////////////////////////////////////////////////////////
//find the maximum sub array sum
const arr= [1, -2, 3, 4, -1, 5]
let currSum = arr[0];


arr.forEach(item=>{
    currSum = Math.max(item, item+currSum);
})

console.log(currSum)// 11