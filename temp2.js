const fork = require('fork');

const child = fork('./child')

child.send({"msg":"message from parent"})
child.on('msg',()=>{
    
})