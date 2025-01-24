
// const intervalId = setInterval (()=>{
//     console.log("")
// })
// clearInterval(intervalId)

// const obj1 = {a:2,b:5}
// const copyObj = {...obj1}

// const temp = ()=>{

// }

// temp([a,b,c])

// const arr = [1,3,6,7,9,8,5]
// const filteredArr = arr.reduce((acc, curr)=>{
// if(!acc.includes(curr)){
//     acc.push(curr)
// }
// return acc
// },[])
// const sortedArr = filteredArr.sort((a,b)=>b-a)

// const useDebouncing = (delay, value)=>{
// const [debouncedValue, setDebouncedValue]= useState(value);
// useState(()=>{
//     const intervalId = setTimeout(()=>{
//         setDebouncedValue(value)
//     })
//     return clearInterval(intervalId)
// },[delay, value])
// return debouncedValue;
// }

let str = "hi hello is a goot to say hi instead of hello and good is actually good term"
// {
// a:5,
// b:7
// }
const strArr = str.split('')
                    .reduce((acc, curr)=>{
                        if(!acc[curr]){
                            acc[curr] = 1
                        }
                        else{
                            acc[curr] += 1
                        }
                        return acc;
                    },{})

console.log(strArr)

const workerThread = require('worker-thread')
const frok = require('fork')

const child = fork('./child.js')

select email Count(*) from user where email group by 
