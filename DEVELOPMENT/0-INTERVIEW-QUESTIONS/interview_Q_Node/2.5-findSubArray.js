//find sub array


const arr = [5,20,10,5,5,10]
const size = 3;
//Output= 2  because [5,20,10], [20,10,5]

const findSubArrays = (arr, size) =>{
    const len = arr.length;
    let maxSum = 0
    let subArraysCount = 0
    let sum = 0
        for(let i=0;i<size;i++){
           sum += arr[i]
        }
        maxSum = sum
        subArraysCount =1 
    for(let i=size;i<len; i++){
      sum = sum - arr[i-size] + arr[i]

      if(maxSum<sum){
        maxSum=sum
        subArraysCount=1
      }
      else if(maxSum==sum){
        subArraysCount++
      }

    }

    return subArraysCount;

}

const subArraysCount = findSubArrays(arr,size);
console.log("subArraysCount= ",subArraysCount)