import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c09e046ce0msh6397be6cb75de98p174d26jsn6fbf70d80312',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };
export const fetcData =createAsyncThunk('quote/getdata' , async ()=>{
    try {
        const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/' , options)
        if(!res.ok){
            console.log(Error('Failed to get data'))           
          return ""
        }
        const data = await res.json();
        return {
            quote : data.content,
            name : data.originator.name
        }
    } catch (error) {
        console.log(error) 
    }
})

const initState = {
    author : "",
    Quote : ""
}
export const quoteSlice = createSlice({
    name:'quote',
    initialState :initState,
    reducers :{

    },
    extraReducers:{
     [fetcData.fulfilled] : (state , action)=>{
        state.author = action.payload.name,
        state.Quote = action.payload.quote      
     } 
    }
})

export const {} = quoteSlice.actions
export default quoteSlice.reducer