//write a code add the sum of digits

const sumOfDigit = (num) =>{
        const sum = num.toString()
                        .split('')
                        .reduce((sum, digit)=>sum+Number(digit),0)
        return sum
}

console.log(sumOfDigit(1234))