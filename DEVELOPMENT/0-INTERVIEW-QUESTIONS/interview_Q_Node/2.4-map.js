//Impotent Map methods
// set, get, has, delete, clear, forEach

//find the index of value  which gives sum of target
//output [0,1]

nums = [5,7,4, 2, 3], target = 6


const findIndex = () =>{
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        let temp = target-nums[i]
        if(map.has(temp)){
            return [map.get(temp), i]
        }
        map.set(nums[i],i)
    }
    return null
}

console.log(findIndex())

//City Bank
// output [ [ 'abc', 'bca', 'cba' ], [ 'efg' ], [ 'ghij' ] ]
const arr = ["abc","bca", "cba", "efg", "ghij"]
const map = new Map();
for(const item of arr){
  const temp = item.split('').sort().join('')
      const group = map.get(temp) || []
      group.push(item)
      map.set(temp, group)
  
 
}
console.log ([...map.values()])