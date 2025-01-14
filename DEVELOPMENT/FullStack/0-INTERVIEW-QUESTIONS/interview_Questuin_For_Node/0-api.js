const express = require("express")
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.get('/getData', (req, res)=>{
    res.status(200).json("get api called")
})

app.listen(5500, ()=>{
    console.log("server is running on port 5500")
})