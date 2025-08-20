const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.get("/getDatas", (req, res)=> {
    res.status(200).json({data:"hello world"})
})

app.listen(4000, ()=>{
    console.log("app is running on port 4000");
})