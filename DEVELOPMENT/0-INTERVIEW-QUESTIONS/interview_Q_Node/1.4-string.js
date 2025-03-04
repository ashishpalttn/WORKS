//Input abeiuolea
//Output iuo
const str = "abeiuolea";
let logestVowel = "";
const vowel = ['a','e','i','o','u']
let temp = ""
str.split('')
    .forEach(item=>{
    if(vowel.includes(item)){
        temp +=item
    }
    else if(logestVowel.length<temp.length){
        logestVowel = temp
        temp = "";
    }
    })
console.log(logestVowel)