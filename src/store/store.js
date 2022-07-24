import { configureStore } from "@reduxjs/toolkit";
import clienteSlice from "../features/clienteSlice";
import menuSlice from "../features/menuSlice";


export const store = configureStore({
    reducer:{
        menu: menuSlice,
        busquedaCliente: clienteSlice 
    }
    
})