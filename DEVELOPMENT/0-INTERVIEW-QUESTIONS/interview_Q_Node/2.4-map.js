//find the index of value  which gives sum of target
//output [0,1]

nums = [4, 2, 3], target = 6


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