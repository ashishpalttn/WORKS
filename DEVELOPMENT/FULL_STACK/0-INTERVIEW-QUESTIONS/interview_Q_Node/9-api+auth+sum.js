const express = require('express')

const app = express()

const authMiddleware = (req, res, next)=> {
    const key = req.headers['api-key'] 
    if(key === "token-key"){
        next();
    }
    else{
        res.status(401).json("invelid token")
    }
} 

const validateInput = (req, res, next)=>{
    const {num1, num2} = req.query
    if(isNaN(num1) || isNaN(num2)){
        res.status(400).json("invelid number")
    }
    next();

}
app.get('/add', authMiddleware, validateInput, (req, res)=>{
    const {num1,num2} = req.query
    const sum = parseFloat(num1)+parseFloat(num2);
    res.status(200).json({result:sum})
})

app.listen(7000,()=>{
    console.log("app is running on port 7000")
})
// call from termonal
//curl "http://localhost:7000/add?num1=2&num2=9" -H "api-key:token-key"