const a ="ashish"
console.log("start",a)
const fun = () => {
   // console.log("fun",a)
   const a =10
   console.log(a)
   if(true){
      console.log("inside if",a)
   }
}
fun()
console.log("end",a)

