
import { configureStore } from "@reduxjs/toolkit";
import ReactSlicer from "./Slice"

export const store = configureStore({
    reducer:{
        Slice1:ReactSlicer,
    }
})