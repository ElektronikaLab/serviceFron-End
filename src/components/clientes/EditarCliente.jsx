import { useSelector } from 'react-redux'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import { useEffect, useState } from 'react'
import electronicaApi from '../../api/electronicaApi'
import { useCliente } from '../../hooks/useCliente'

registerLocale("es",es)
export const EditarCliente = () => {
    const {editar, idEditar} = useSelector(state => state.busquedaCliente);
    const {editarCliente} = useCliente()
    const [form, setForm] = useState({
        cliente:'',
        numero:'',
        marca:'',
        modelo:'',
        descripcionCliente:'',
        informeTecnico:'',
        accesorios:'',
        tecnico:'',
        start: '',
        end:'',
        entregado:'',
        img:'',
        obseraciones:''
    });
    const handleFecha = (event, fecha)=>{
        setForm({
            ...form,
            [fecha]:event
        })
    }
    const handleChangedInfo = ({target})=>{
        setForm({
            ...form,
            [target.name]:target.value
        })
    }
    const handleImg = (e)=>{
        setForm({
            ...form,
            ["img"]:e.target.files[0]
        })
    }
    const handleSubmitInfo = (e)=>{
        e.preventDefault();
      
        editarCliente(form,idEditar);
    }
    const BuscarClienteId = async()=>{
        const {data} = await electronicaApi.get(`/tienda/cliente/${idEditar}`);
        if(data.end === undefined){
            setForm({
                cliente:data.cliente,
                numero:data.numero,
                marca:data.marca,
                modelo:data.modelo,
                descripcionCliente:data.descripcionCliente,
                informeTecnico:data.informeTecnico,
                accesorios:data.accesorios,
                tecnico:data.tecnico,
                start: new Date(data.start) ,
                end:'',
                entregado:data.entregado,
                img:'',
                observaciones:data.observaciones
            });
        }else{
            setForm({
                cliente:data.cliente,
                numero:data.numero,
                marca:data.marca,
                modelo:data.modelo,
                descripcionCliente:data.descripcionCliente,
                informeTecnico:data.informeTecnico,
                accesorios:data.accesorios,
                tecnico:data.tecnico,
                start: new Date(data.start) ,
                end:new Date(data.end),
                entregado:data.entregado,
                img:''
            });
            
        }
       
    }
    useEffect(() => {
        BuscarClienteId();
    }, [])
    

    if(!editar){
        return("");
    }
    return (
        <div className="info">
            <form onSubmit={handleSubmitInfo} >
                <div className="informacion">
                    <div className="info-left">
                        <label htmlFor="">Cliente: </label>
                        <input type="text" name='cliente' className='btn-buscar' onChange={handleChangedInfo} value={form.cliente} autoComplete="off"/>
    
                        <label htmlFor="">Celular: </label>
                        <input type="text" className='btn-buscar' name='numero' value={form.numero} onChange={handleChangedInfo} autoComplete="off"/>
    
                        <label htmlFor="">Marca: </label>
                        <input type="text" name='marca' className='btn-buscar' value={form.marca} onChange={handleChangedInfo} autoComplete="off"/>
    
                        <label htmlFor="">Modelo: </label>
                        <input type="text" name='modelo' className='btn-buscar' value={form.modelo} onChange={handleChangedInfo} autoComplete="off"/>
    
                        <label htmlFor="">Descripcion del cliente: </label>
                        <textarea name="descripcionCliente" cols="30" rows="4" className='btn-buscar' value={form.descripcionCliente} onChange={handleChangedInfo}></textarea>
                        
                        <label htmlFor="">Informe tecnico: </label>
                        <textarea name="informeTecnico" cols="30" rows="4" className='btn-buscar' value={form.informeTecnico} onChange={handleChangedInfo}></textarea>
                        
                        
                        <label htmlFor="">Accesorios: </label>
                        <textarea name="accesorios"  cols="30" rows="4" className='btn-buscar' value={form.accesorios} onChange={handleChangedInfo}></textarea>

                        <label htmlFor="">Tecnico: </label>
                        <input type="text" name='tecnico' className='btn-buscar' value={form.tecnico} onChange={handleChangedInfo} autoComplete="off"/>

                    </div>
                    <div className="info-rigth">
                        <label htmlFor="">Observaciones: </label>
                        <textarea name="observaciones"  cols="30" rows="4" className='btn-buscar' value={form.observaciones} onChange={handleChangedInfo}></textarea>

                        <label htmlFor="">Fecha de ingreso:</label>
                        <DatePicker
                            name="start"
                            selected={form.start}
                            onChange={(event)=>handleFecha(event,"start")}
                            locale="es"
                            className="btn-buscar"
                            autoComplete="off"
                        />
                        <label htmlFor="">Fecha de salida:</label>
                        <DatePicker
                            name="end"
                            selected={form.end}
                            onChange={(event)=>handleFecha(event,"end")}
                            locale="es"
                            className="btn-buscar"
                            autoComplete="off"
                        />
                        <label htmlFor="">Entregado: </label>
                        <input type="text" name='entregado' className='btn-buscar' value={form.entregado} onChange={handleChangedInfo} autoComplete="off"/>
                        
                        <label htmlFor="">Imagen:</label>
                        <img className={ form.img===undefined ?"desactive-img":"form-img"} src={`http://localhost:8080/api/uploads/tienda/${idEditar}` } alt="" />
                        <input type="file" name="img" onChange={handleImg}/>
           
                    </div>
                </div>
                
                <button className='btn-options btn-info m-left-20'>Editar</button>
            </form>
        </div>
      )
}
