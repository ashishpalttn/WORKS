// // input= "asdeafasfasfre"
// // OP: sdeaf
// // Find the longest non repeating sub string?

// const input = "asdeafasfasfre";
// let temp =[]
// const inputArr = input.split('')
//                         .reduce((acc, curr)=>{
//                             if(!temp.includes(curr)){
//                                 temp.push(curr);
//                             }
//                             else{
//                                 acc.push(temp.join());
//                                 temp = []
//                             }
                        
//                             return acc;

//                         },[])
//                         console.log(inputArr)
// let longestStr =''
// for(let i=0; i<inputArr.length; i++){
//     if(inputArr[i]>longestStr.length){
//         longestStr = inputArr[i]
//     }
// }
// console.log("longest str", longestStr);



// console.log("start outer")

// async function fetchData() {
//     console.log("start")

//     try {
//         console.log("try");
//         let result = await Promise.reject('Request Failed');
    
//     } catch (error) {
//         console.log('Caught:', error);
//     }
//     console.log("End")
// }
// console.log("End - outer")

// fetchData();

// console.log("End - last..............")




const str = "Find the longest non repeating sub string";
const arr = str.split(' ');
const newarr = arr. map(item=>{
   return item.split('').reverse().join('')
})
console.log(newarr)
