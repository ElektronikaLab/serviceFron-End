import { createSlice } from "@reduxjs/toolkit";

export const clienteSlice = createSlice({
    name:'cliente',
    initialState:{
        clientes:[],
        busquedaCliente: false,
        nuevoCliente: false,
        idEditar:"",
        editar:false,
        totalClientes:"0",
        cantRegistros:"0",
    },
    reducers:{
        buscarCliente:(state,{payload})=>{
            state.clientes = payload.data
            state.busquedaCliente=payload.value;
            state.editar = false;
            state.nuevoCliente = false;
        },
        insertarCliente:(state,{payload})=>{
            state.nuevoCliente=payload

            state.editar = false;
            state.busquedaCliente = false;
        },
        editarPorId:(state, {payload})=>{
            
            state.idEditar = payload.id;
            state.editar = payload.value
        },
        masInformacion:(state, {payload})=>{
            state.totalClientes = payload.total,
            state.cantRegistros = payload.conta
        }
    }
})

export const {buscarCliente, insertarCliente, editarPorId, masInformacion} = clienteSlice.actions;

export default clienteSlice.reducer;