https://chatgpt.com/share/679a6326-cb10-800a-b8ac-c5b92cd415b0

console.log("//1/////////////////////////////////////////////////////////////////////////////////////////////////////")

console.log('Start');
setTimeout(() => {
 console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
 console.log('Promise');
});
console.log('End');

          output
          Start
          End
          Promise
          Timeout 

console.log("//2/////////////////////////////////////////////////////////////////////////////////////////////////////")

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('resolve1')
  })
   
  const promise2 = promise1.then(res => {
    console.log(res)
    return 'promise2'
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


console.log("//3/////////////////////////////////////////////////////////////////////////////////////////////////////")


console.log("start outer")

async function fetchData() {
    console.log("start")

    try {
        console.log("try");
        let result = await Promise.reject('Request Failed');
    
    } catch (error) {
        console.log('Caught:', error);
    }
    console.log("End")
}
console.log("End - outer")

fetchData();

console.log("End - last..............")


console.log("//4/////////////////////////////////////////////////////////////////////////////////////////////////////")

console.log("Start"); // 1️⃣

setTimeout(() => console.log("setTimeout"), 0); // 5️⃣ (Macrotask)

setImmediate(() => console.log("setImmediate")); // 6️⃣ (Macrotask)

process.nextTick(() => console.log("nextTick")); // 2️⃣ (Microtask)

queueMicrotask(() => console.log("queueMicrotask")); // 3️⃣ (Microtask)

Promise.resolve().then(() => console.log("Promise")); // 4️⃣ (Microtask)

console.log("End"); // 7️⃣

console.log("//5/////////////////////////////////////////////////////////////////////////////////////////////////////")

const a ="ashish"
console.log("start",a)
const fun = () => {
  //  console.log("fun",a)
   const a =10
   console.log(a)
   if(true){
      console.log("inside if",a)
   }
}
fun()
console.log("end",a)

