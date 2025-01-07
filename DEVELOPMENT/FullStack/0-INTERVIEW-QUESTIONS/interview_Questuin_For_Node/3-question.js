//finds the first non-repeated character in a string. If all characters are repeated, return null

const findFirstNonRepeated = (str) =>{
    const strArr = str.split('');
    const obj = strArr.reduce((acc, curr)=>{
        if(!acc[curr]){
            acc[curr] = 1
        }else{
            acc[curr] += 1; 
        }
        return acc
    },{}) 
    const temp = []
    for (let key in obj){      
        if(obj[key]===1){
            temp.push(key);
        }
    }
    if(Object.keys(obj).length===0){
        return null;
    }
    temp.sort()
    console.log("Answer====>>>>",temp[0]);
}
findFirstNonRepeated("abacabad")