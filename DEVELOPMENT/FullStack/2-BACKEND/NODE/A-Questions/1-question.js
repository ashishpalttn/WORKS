//Converter first charater of word in Capital
const str = 'this is some random string where the first latter of each word will be capital'
const arr = str.split(' ')
               .map((word)=>word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ')
console.log(arr);
//Answer = 'This Is Some Random String Where The First Latter Of Each Word Will Be Capital'
