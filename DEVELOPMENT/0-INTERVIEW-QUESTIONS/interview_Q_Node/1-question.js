//1- Converter first charater of word in Capital
const str1 = 'this is some random string where the first latter of each word will be capital'
//Answer1 = 'This Is Some Random String Where The First Latter Of Each Word Will Be Capital'
const arr = str1.split(' ')
               .map((word)=>word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ')
console.log("Answer1======>>>>>>>",arr);

///////////////////////////////////////////////////////////////////////////////////////////////
const str2 = "India is my country"
//output = Aidni si ym yrtnuoc
const reverseStr = str2.split(' ')
                        .map((item, index)=>{
                            let word = item.split('').reverse().join('');
                            if(index==0){
                               const  fword = word.split('').map(item=>item.toLowerCase()).join('')
                               return fword[0].toUpperCase() + fword.slice(1);
                            }
                            return word
                        }).join(' ');
console.log("Answer2=========>>>>>>>>>>>",reverseStr)

