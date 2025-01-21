const {fork} = require('fork')

const child = fork('./child.js')

child.send({message:'Hello Child'});
child.on('message', (msg)=>{
    console.log('message from child',msg )
})