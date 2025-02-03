// find the highest frequency character if 2 character have same requency then find who comes first in alpha-beta

const str = "ashish";
const obj = str.split('')
.sort((a,b)=>a-b)
.reduce((acc, curr)=>{
if(!acc[curr]){
acc[curr]  = 1
}else{
    acc[curr] +=1;
}
return acc
}, {})
let maxfrq = 0
let maxChar = ''
for (const char in obj){
    if(obj[char] >maxfrq){
        maxfrq = obj[char]
        maxChar = char
    }
    else if(maxfrq===obj[char]){
        if(maxChar>char){
            maxChar=char
        }
    }
}

console.log(`${maxChar}:${maxfrq}`)

//output
//h:2