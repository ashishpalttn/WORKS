const express = require('express');
const limitter = require('express-rate-limit')
const app = express()

const auth =(tokenP) =>(req,res,next) =>{
   const {token} = req.headers
   
if(token===tokenP){
   next();
}
else{
   res.status(403).json("invelid-token");
}
}

const sumNumber =(custom)=> (req, res) =>{
   const {num1, num2} = req.query
   if(!isNaN(num1) && !isNaN(num2)){
      const sum = Number(num1) + Number(num2)+custom;
      res.status(200).json(`sum= ${sum}`)
   }
   else{
      res.status(403).json("invelid ")
   }
} 

app.use(limitter({windowMs:1*60*1000,max:2,message:"too many request"}))
app.use(auth('token-key'));
app.get('/getData',(req, res)=>{
sumNumber(20)(req,res)
})
app.listen(5000,()=>{
   console.log("app is running on port 5000")
})