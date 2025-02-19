// print 1 to 5 number ater 1,2,3,4,5 sec

function printNumbers() {
    let lastTime = 0 
    for (let i = 1; i <= 5; i++) {
        lastTime += i* 1000
      setTimeout(() => {
        console.log(i);
      }, (i* 1000)+lastTime);
    }
  }
  
  printNumbers();


  //just for testing......................................
//   const printNum =()=> {
//     let i=0;
//     const timoutId = setInterval(()=>{
//         if(i===4){
//             clearInterval(timoutId)
//         }
//         i++;
//         console.log(i)
//     },1000)
//   }

//   printNum()