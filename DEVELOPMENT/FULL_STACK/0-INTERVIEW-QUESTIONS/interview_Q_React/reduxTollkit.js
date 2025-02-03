// vanila code for slice

import { createSlice, createAsyncThunk }  from 'redux/toolkit'
const BASE_URL = ""

export const getStudent = createAsyncThunk("", async ()=>{
  try{
    const response = await axios.get(BASE_URL)
    return response.data;
  }catch(r){
        console.log(error)
  }

})

const studentSlice = createSlice({
    name:"student",
    initialState:{loading:false,data:[]},
    reducer,
    extraReducer:((builder)=>{
        builder
        .addCase(getStudent.pending, (state)=>{
            state.loading =true
         })
         .addCase(getStudent.fulfill, (state, action)=>{
            state.data = action.data
         })

    })
})

export default studentSlice.reducer

const store = configureStore({

})