function delay(ms) {
    // Your code here
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('success');
        },ms)
    })
  }
  
  delay(1000).then(() => {
    console.log('1 second passed');
    return delay(2000);
  }).then(() => {
    console.log('2 more seconds passed');
  });