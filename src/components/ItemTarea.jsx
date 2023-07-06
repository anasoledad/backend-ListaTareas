import { Button, ListGroup } from "react-bootstrap";

// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaBorrarTarea, obtenerTareas } from "../helpers/queries";



const ItemTarea = ({ tarea, setTareas }) => {


const borrarTarea = ()=>{
  Swal.fire({
    title: '¿Esta seguro de eliminar esta tarea?',
    text: "No se puede revertir este paso",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      
      //aqui tengo que hacer la peticion DELETE
      consultaBorrarTarea(tarea.id).then((respuesta)=>{
        if(respuesta.status === 200){
          Swal.fire(
            'La tarea fue eliminada',
            `La tarea ${tarea.nombreTarea} fue eliminado`,
            'success'
          );
          // actualizar el state producto del componente Administrador
          obtenerTareas().then((respuesta) => setTareas(respuesta))
        }else{
          Swal.fire(
            'Se produjo un error',
            'Intete realizar esta operacion mas tarde',
            'error'
          )
        }
      })
    }
  })
}

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea.nombreTarea}
            {/* <Link className="btn btn-warning mb-2" to={`/administrador/editar/${tarea.id}`}>Editar</Link> */}
        <Button variant="danger" onClick={borrarTarea}>
          Borrar
        </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;