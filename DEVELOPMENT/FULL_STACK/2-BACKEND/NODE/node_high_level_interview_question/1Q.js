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

  const newList = list.reduce((acc, curr)=>{
        const {country, state, city} = curr;
        const obj = {};
        let isCountryExist = acc.find((item)=>item.countryName===country)
        if(!isCountryExist){
            isCountryExist = {countryName: country, state:[]}
            acc.push(isCountryExist)
        }
        const isStateExist = isCountryExist.state.some(item=>item.stateName===state)
        if(!isStateExist){
            isCountryExist.state.push({stateName:state, city:[]})
        }

        return acc
  },[]) 

  console.log(newList)


//output
//   [
//     {
//       "countryName": "India",
//       "state": [
//         {
//           "stateName": "Maharastra",
//           "city": ["Mumbai", "Pune"]
//         },
//         {
//           "stateName": "Rajasthan",
//           "city": ["Jaipur", "Kota"]
//         }
//       ]
//     }
//   ]