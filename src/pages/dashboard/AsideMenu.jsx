import { useSelector, useDispatch } from 'react-redux'
import { cambiarMenu } from '../../features/menuSlice';
import './style.css'
export const AsideMenu = () => {
    const dispatch = useDispatch();
    const { opcion } = useSelector(state => state.menu);

    const press = (bandera) => {
        dispatch(cambiarMenu(bandera))
    } 

    return (
        
        <div className="aside">
            <div className="logo">
                <img className="logo-img" src="../../../assets/img/logo.png" alt="" />
            </div>
            <div className="opciones">
                <p
                    className={`${opcion===1 ?'btn active':'btn' }` }
                    onClick={() => press(1)} 
                >Clientes</p>
                <p 
                    className={`${opcion===2 ?'btn active':'btn' }` }
                    onClick={() => press(2)}
                >Garantias</p>
                <p
                    className={`${opcion===3 ?'btn active':'btn' }` }
                    onClick={() => press(3)}
                >Contabilidad</p>
            </div>
            
        </div>
    )
}
