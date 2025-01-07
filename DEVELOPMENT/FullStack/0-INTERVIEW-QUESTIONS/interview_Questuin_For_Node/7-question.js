//GlobleLogic
//write a Promise and pass delay time 
function delay (ms) {
    //write code here
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("success")
        },ms)
    })
}

delay(1000).then(()=>{
    console.log("1 sec delayed")
    return delay(2000)
}).then(()=>{
    console.log("delay 2 sec")
})