// const parent = () =>{
//     let a = 5;
//     return ()=>{
//         console.log(a)
//     }
// }

const { response } = require("express")

// const promise = (token) =>{
//     return new Promise((res, rej)=>{
//         if(token){
//             res("success")
//         }
//         else{
//             rej("rejecte")
//         }
//     })
// }

// console.log(1 < 2 < 3);

// const obj1={ a:3, b:4, sum:()=>{ return this.a+this.b; } }

// const result=obj1.sum;

// console.log(result())
// var temp = "";
// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i; j++){
//         temp +=j;
//         console.log(i,j);
//     }
//     temp += "\n"
// }

// console.log(temp);

// function addition(x, y){
//      arguments[10] = 10; 
// console.log(x+y); }
 
// addition(5,10) 
// addition(5,5)

// const Counter = () =>{
// const [count, setCount] = useState(0)
// useEffect(()=>{
//     fetch("api-end-poit")
//     .then(response=>response.json())
//     .then(data =>setCount(data))
// })
//     return (
//         <div>
//             <p>Counter: {count}</p>
//             <button >Start</button>
//         </div>
//     )
// }

const express = require(exp)
const app = express()

const calculateTime = (req, res)=>{


}
app.use(calculateTime)
app.get('/getData/:name',(res, rej)=>{
const {} = res.params

})