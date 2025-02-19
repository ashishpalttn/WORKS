const list = [
    {     country: "India",     state: "Maharastra",     city: "Mumbai"
    },
    {     country: "India",     state: "Maharastra",     city: "Pune"
    },
    {     country: "India",     state: "Rajasthan",     city: "Jaipur"
    },
    {     country: "India",     state: "Rajasthan",     city: "Kota"
    },
    {     country: "India",     state: "Rajasthan",     city: "Jaipur"
    }
  ]
  
  const result = list.reduce((acc, curr)=>{
      const {state, city} = curr;
     if(!acc[state]){
         acc[state]= {cities :[]}
     } 
     if(!acc[state].cities.includes(city)){
         acc[state].cities.push(city);
     }
     return acc;
      
  },{})
  
  console.log("Answer====>>>>>",result);

  // Answer -----------------------------------
  // {
  //   Maharastra: { cities: [ 'Mumbai', 'Pune' ] },
  //   Rajasthan: { cities: [ 'Jaipur', 'Kota' ] }
  // }