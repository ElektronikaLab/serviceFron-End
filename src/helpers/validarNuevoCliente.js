import Swal from "sweetalert2";
export const validarNuevoCliente = (datos={})=>{
    if(datos.cliente === ''){
        Swal.fire("Fallo","Debe llenar el nombre del cliente","warning")
        return false;
    }
    if(datos.numero === ''){
        console.log("vacio")
        Swal.fire("Fallo","El numero celular del cliente es obligatorio","warning")
        return false;  
    }
    if(datos.marca === ''){
        console.log("vacio")
        Swal.fire("Fallo","Debe llenar la marca del objeto","warning")
        return false;
    }
    if(datos.modelo === ''){
        console.log("vacio")
        Swal.fire("Fallo","Debe llenar el modelo del objeto","warning")
        return false;
    }
    if(datos.descripcionCliente === ''){
        console.log("vacio")
        Swal.fire("Fallo","Debe llenar la descripcion del Cliente","warning")
        return false;       
    }
    if(datos.start === ''){
        console.log("vacio")
        Swal.fire("Fallo","La fecha de ingreso es obligatoria","warning")
        return fals;   
    }
    if(datos.tecnico === ''){
        console.log("vacio")
        Swal.fire("Fallo","El tecnico es obligatorio","warning")
        return false;   
    }
    return true;
}