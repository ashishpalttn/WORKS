const express = require('express')
const rateLimit = require('express-rate-limit')
const app = express()

const limiter = rateLimit({
    windowMs : 1*60*1000,
    max:2,
    mwssage: "TooMany request"
})

// app.use('/getData', limiter);
app.get('/getData' ,limiter ,(req, res, next)=>{
    res.status(200).json("get Api called")
})

app.listen(6000, ()=>{
    console.log("app is running on port 6000")
})