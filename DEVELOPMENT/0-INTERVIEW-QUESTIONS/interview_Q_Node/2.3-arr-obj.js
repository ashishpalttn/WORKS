const arr = [{name:"ashish", age:25, location:"Pune", state:"MH" },{name:"pal", age:25, location:"Pune", state:"MH" }]

const newArr = arr.reduce((acc, curr)=>{
if(Object.keys(acc).length===0){
    acc = {names:curr.name, ages:curr.age, locations: curr.location, states :curr.state}
}
else{
    acc.names = `${acc.names}, ${curr.name}` 
    acc.ages = `${acc.ages}, ${curr.age}` 
    acc.locations = `${acc.locations}, ${curr.location}` 
    acc.states = `${acc.states}, ${curr.state}` 
}
return acc;
},{})

console.log(newArr)



// {names: ashish,pal
// ages : 25,25
// locattion: Pune, Pune
// state: MH,MH
// }
