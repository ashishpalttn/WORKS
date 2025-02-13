// is pure strring or not

const isString = (input) => {
    const arr = input.split('')
    
    for(let i=0;i<arr.length;i++){
      
          if(!isNaN(arr[0])){
            return "this a number included"
          }
    }
    return "this is a pure string"
  
  }
  
  console.log(isString("ashish"))