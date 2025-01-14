const fs = require('fs');

const sourseFile = './ashish.jpg'
const destinationFile = './destination.jpg'

const readableStream = fs.createReadStream(sourseFile)
const writableStream = fs.createWriteStream(destinationFile);

readableStream.pipe(writableStream);
readableStream.on('error', (error)=>{
    console.error("Error reading the file",error)
})
writableStream.on('error',(error)=>{
    console.error('Error on write',error)
})

writableStream.on('finish', ()=>{
    console.log('file copying is completed successfully')
})