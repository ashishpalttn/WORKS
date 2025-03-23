const express = require('express')

const app = express()

app.get('/getData',(req, res)=>{
    res.status(200).json("getdata called success")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})