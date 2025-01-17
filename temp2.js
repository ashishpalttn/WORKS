const findFirstNonRepeated = (str) =>{
const strArr = str.split('').reduce((acc, curr)=>{
        if(!acc[curr]){
            acc[curr] = 1;
        }
        else{
            acc[curr] +=1;
        }
        return acc
},{})

const keys = Object.keys(strArr)
keys.sort()
console.log(strArr[keys[0]])
}

findFirstNonRepeated("abacabad")