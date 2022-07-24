import { useSelector } from "react-redux"
import { Clientes } from "./secciones/Clientes";
import { Contabilidad } from "./secciones/Contabilidad";
import { Garantias } from "./secciones/Garantias";


export const Secciones = () => {
    const { opcion } = useSelector(state => state.menu);

    const segunOpcion = () =>{
        switch(opcion){
            case 1: return(<Clientes />)
            case 2: return(<Garantias />)
            case 3: return(<Contabilidad />)
        }
    }

    return (
        <div className='secciones'>
            {segunOpcion()}    
        </div>
    )
}
