
import { useSelector } from 'react-redux'
import { Secciones } from './Secciones';

export const Cuerpo = () => {
    const { opcion } = useSelector(state => state.menu);
   
    const mensaje = [
        'Aqui podras administrar a los cliente de la tienda Total es Electronica',
        'Administracion para las garantias Oster ',
        'Administracion contable de la tienda Total es Electronica'
    ]

    return (
        <main className='main'>
            <div className="header">
                <h2>Bienvenido Servicio Tecnico Total es Electronica</h2>
                <p>{mensaje[opcion-1]}</p>
            </div>
            <Secciones/>
        </main>
    )
}
