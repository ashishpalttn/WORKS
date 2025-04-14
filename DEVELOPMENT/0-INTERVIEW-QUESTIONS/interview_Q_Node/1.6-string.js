//find longest uniqe character's sub string 

const Input = "pwwkew" ;
// output uique substring = wke
// Output: 3

const inputArr = Input.split('')
const len = inputArr.length
let longestArr = '';
let str = ''
for(let i=0; i<len; i++){
    if(str[0]!==inputArr[i]){
       str = inputArr[i] + str;
      console.log(str)
    }
    else if(str.length>longestArr.length){
        longestArr = str.split('').reverse().join('');
        str = inputArr[i];
    }
}

console.log(longestArr)