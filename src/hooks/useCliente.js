import { useDispatch } from "react-redux"
import Swal from "sweetalert2";
import electronicaApi from "../api/electronicaApi";
import { buscarCliente, editarPorId, insertarCliente, masInformacion } from "../features/clienteSlice";
import { validarNuevoCliente } from "../helpers/validarNuevoCliente";


export const useCliente = () =>{

    const dispatch = useDispatch();

    const buscandoCliente = async(buscar="")=>{
        if(buscar===""){
            dispatch(buscarCliente({data:[],value:false}))
            return;
        }
        const {data} = await electronicaApi.get(`/tienda/buscar/${buscar}`);
        if(data.length === 0){
            dispatch(buscarCliente({data:[], value:false}));
        }else{
            dispatch(buscarCliente({data, value:true}));
        }
    }

    const nuevoCliente = async(datos={})=>{
        
        if(validarNuevoCliente(datos)){
            const {data} = await electronicaApi.post('/tienda',datos);
            if(data){
                Swal.fire("Exito","Cliente agregado","success");
                dispatch(insertarCliente(false))
                conteoClientes();
                
            }else{
                Swal.fire("Error","Algo salio mal comuniquese con el desarrollador","error")
            }
        }
    }

    const editarCliente = async(info={}, id)=>{
        const {img, ...datos} = info;
        try {
            if(img){
                insertarImagen(img,id)
            }else{
                console.log("no entro la img")
            }
            
            const {data} = await electronicaApi.put(`/tienda/${id}`, datos);
            Swal.fire("","Cliente editado","success");
            dispatch(editarPorId({value:false}));  
        } catch (error) {
            Swal.fire("fallo al editar","comuniquese con el desarrolador","error");  
        }
        
    }
    const insertarImagen = async(file ,id="")=>{
        const formData = new FormData();
        formData.append('archivo', file);
        const {data} = await electronicaApi.put(`/uploads/tienda/${id}`, formData)
        return;
    }   
    const conteoClientes = async()=>{
        const {data} = await electronicaApi.get('/tienda/total');
        const {total, conta} = data
        dispatch(masInformacion({total, conta}))
    }
    return{

        //metodos
        buscandoCliente,
        nuevoCliente,
        editarCliente,
        conteoClientes
    }
}