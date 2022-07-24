import { useEffect, useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editarPorId, insertarCliente } from '../../features/clienteSlice';
import { useCliente } from '../../hooks/useCliente';
import './clientes.css'


export const BusquedaCliente = () => {
    const dispatch = useDispatch();
    const {buscandoCliente, conteoClientes} = useCliente()
    const { clientes, busquedaCliente, totalClientes, cantRegistros} = useSelector(state => state.busquedaCliente);

    const [mostrarTabla, setMostrarTabla] = useState(false)
    const [search, setSearch] = useState({buscar :""})

    const handleChanged =({target})=>{
        setSearch({
            ...search,
            [target.name]: target.value
        })
    }
    const handleBuscar = (e)=>{
        e.preventDefault();
        buscandoCliente(search.buscar)
        setMostrarTabla(true)
    }

    const handleNuevoCliente = ()=>{
        setSearch({buscar:""})
        dispatch(insertarCliente(true));
        setMostrarTabla(false);
   
    }

    const handleEdit = (id)=>{
        setMostrarTabla(false)
        setSearch({buscar:""})
        dispatch(editarPorId({id, value:true}))
        
    }
    
    const tablaClientes = ()=>{
        
        if(busquedaCliente){
            return(
                <div className="info">
                     <table className="tablas">
                        <thead>
                            <tr>    
                                <td className="table-th">cliente</td>
                                <td className="table-th">celular</td>
                                <td className="table-th">marca</td>
                                <td className="table-th">modelo</td>
                                <td className="table-th">entregado</td>
                                <td className="table-th">editar</td>
                            </tr>
                        </thead>
                        <tbody>
                        {   
                            clientes.map(cli =>(
                                <tr   key={cli.id} className="color">
                                   
                                    <td className="table-td">{cli.cliente}</td>
                                    <td className="table-td">{cli.numero}</td>
                                    <td className="table-td">{cli.marca}</td>
                                    <td className="table-td">{cli.modelo}</td>   
                                    <td className="table-td">{cli.entregado}</td>    
                                    <td className="table-td" onClick={()=>handleEdit(cli.id)} ><img src='../../../assets/img/edit.png' className='edit' /></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return(
                <div className='info'>No se encontraron clientes con el termino {search.buscar} </div>
            )
        }
    }

    useEffect(() => {
        conteoClientes();
    }, [])
    
    return (
        <> 
            <p className='mas-info'>Total clientes: <strong>{totalClientes}</strong> </p>
            <p className='mas-info'>Total Registros: <strong>{cantRegistros}</strong> </p>
            <button className='btn-options' onClick={()=>handleNuevoCliente()} >Nuevo Cliente</button>
            <form className='busqueda-cliente' onSubmit={handleBuscar}>
                <p>Busqueda por cliente</p>
                <input 
                  type="text" 
                  name="buscar" 
                  className='btn-buscar'
                  onChange={handleChanged}
                  value={search.buscar}
                  autoComplete="off"
                />
                <button className='btn-options'>buscar</button>
            </form>  
            {(mostrarTabla)?tablaClientes():""}
        </>
    )
}
