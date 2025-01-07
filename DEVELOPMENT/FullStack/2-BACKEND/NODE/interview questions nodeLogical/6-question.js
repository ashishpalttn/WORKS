//write a basic api using express

const express = require('express')
const app = express()
app.use(express.json());
app.get('/api',(req, res)=>res.send("hellow world"))
app.listen(3000, ()=>console.log("server is running on port 3000"))