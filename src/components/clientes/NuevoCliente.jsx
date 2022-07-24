import { useState } from "react";
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import { useCliente } from "../../hooks/useCliente";

registerLocale("es",es)

export const NuevoCliente = () => {
    const {nuevoCliente} = useCliente();
    const [form, setForm] = useState({
        cliente:'',
        numero:'',
        marca:'',
        modelo:'',
        descripcionCliente:'',
        accesorios:'',
        tecnico:'',
        start: '',
        obervaciones:''
    });

    const handleFecha = (e)=>{
        setForm({
            ...form,
            ['start']:e
        })
    }

    const handleChangedInfo = ({target})=>{
      setForm({
        ...form,
        [target.name]:target.value
      })
    }
    const handleSubmitInfo = (e)=>{
      e.preventDefault();
      nuevoCliente(form);
    }

    return (
        <div className="info">
            <form onSubmit={handleSubmitInfo} >
                <div className="informacion">
                    <div className="info-left">
                      <label htmlFor="">Cliente: </label>
                      <input type="text" name='cliente' className='btn-buscar' onChange={handleChangedInfo} autoComplete="off"/>
  
                      <label htmlFor="">Celular: </label>
                      <input type="text" className='btn-buscar' name='numero' onChange={handleChangedInfo} autoComplete="off"/>
  
                      <label htmlFor="">Marca: </label>
                      <input type="text" name='marca' className='btn-buscar'  onChange={handleChangedInfo} autoComplete="off"/>
  
                      <label htmlFor="">Modelo: </label>
                      <input type="text" name='modelo' className='btn-buscar'  onChange={handleChangedInfo} autoComplete="off"/>
  
                      <label htmlFor="">Descripcion del cliente: </label>
                      <textarea name="descripcionCliente" cols="30" rows="4" className='btn-buscar' onChange={handleChangedInfo}></textarea>
                      
                    
                      <label htmlFor="">Accesorios: </label>
                      <textarea name="accesorios"  cols="30" rows="4" className='btn-buscar' onChange={handleChangedInfo}></textarea>
                    
                    </div>
                    <div className="info-rigth">
                        <label htmlFor="">Tecnico: </label>
                        <input type="text" name='tecnico' className='btn-buscar' onChange={handleChangedInfo} autoComplete="off"/>
                        
                        <label htmlFor="">Observaciones: </label>
                        <textarea name="observaciones"  cols="30" rows="4" className='btn-buscar' onChange={handleChangedInfo}></textarea>

                        <label htmlFor="">Fecha de ingreso:</label>
                        <DatePicker
                            name="start"
                            selected={form.start}
                            onChange={handleFecha}
                            locale="es"
                            className="btn-buscar"
                            autoComplete="off"
                        />
                    </div>
                </div>
                
                <button className='btn-options btn-info m-left-20'>Agregar</button>
            </form>
        </div>
      )
}
