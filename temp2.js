const express =require('express');
const app = express();

app.get('/getData',(req, res)=>{
    res.status(200).json("get call success")
})

app.listen(4000,()=>{
    console.log("server is running on ")
})