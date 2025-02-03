https://chatgpt.com/share/679a6326-cb10-800a-b8ac-c5b92cd415b0
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log('Start');
// setTimeout(() => {
//  console.log('Timeout');
// }, 0);
// Promise.resolve().then(() => {
//  console.log('Promise');
// });
// console.log('End');

          // output
          // Start
          // End
          // Promise
          // Timeout 


//2///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('resolve1')
  })
   
  const promise2 = promise1.then(res => {
    console.log(res)
    // return 'promise2'
  })

  promise2.then(res=>{
    console.log('promise2 resolve with res', res )
  })
   
  console.log('promise1:', promise1);
  console.log('promise2:', promise2);

              //output
              //   1
              // promise1: Promise { 'resolve1' }
              // promise2: Promise { <pending> }
              // resolve1


//3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////