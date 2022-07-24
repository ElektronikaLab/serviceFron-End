import React from 'react'
import { useSelector } from 'react-redux'
import { BusquedaCliente } from '../../../components/clientes/BusquedaCliente'
import { EditarCliente } from '../../../components/clientes/EditarCliente'
import { NuevoCliente } from '../../../components/clientes/NuevoCliente'

export const Clientes = () => {
    const {nuevoCliente, editar} = useSelector(state => state.busquedaCliente)
    return (
        <>
            <BusquedaCliente/>
            {(nuevoCliente)?<NuevoCliente  />:""}
            {(editar)?<EditarCliente />:"" }
        </>
    )
}
