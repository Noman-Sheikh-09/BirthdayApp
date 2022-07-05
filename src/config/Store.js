import { configureStore } from "@reduxjs/toolkit";
import birthdaySlice from "../store/birthdaySlice";
const Store = configureStore({
    reducer:{
       birth:  birthdaySlice,
    }
})
export default Store ;