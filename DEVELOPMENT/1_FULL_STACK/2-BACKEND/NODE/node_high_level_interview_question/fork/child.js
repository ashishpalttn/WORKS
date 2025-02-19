process.on('msg',(msg)=>{
    console.log("message from parent",msg)
    process.send({msg:'Hello parent'})
})