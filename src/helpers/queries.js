const URL_Tarea = import.meta.env.VITE_API_TAREA;

export const obtenerTareas = async ()=>{
    try{
        const respuesta = await fetch(URL_Tarea)
        const listaTareas = await respuesta.json();
        return listaTareas;
    }catch(error){
        console.log(error)
    }
}
export const obtenerTarea = async(id)=>{
    try{
        const respuesta = await fetch(`${URL_Tarea}/${id}`);
        const tareaEditar = await respuesta.json();
        return tareaEditar;
    }catch(error){
        console.log(error)
    }
} 


export const consultaBorrarTarea = async(id)=>{
    try{
        const respuesta = await fetch(`${URL_Tarea}/${id}`, {
            method: 'DELETE'
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}

export const consultaCrearTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URL_Tarea, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}