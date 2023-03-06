import { configureStore } from "@reduxjs/toolkit";

import quoteReducer from './actAndRed'

const  store = configureStore({
    reducer :{
        quote : quoteReducer
    }
})
export default store