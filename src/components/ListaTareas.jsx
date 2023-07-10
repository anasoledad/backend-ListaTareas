import { ListGroup } from 'react-bootstrap';
import ItemTarea from "./ItemTarea";
import { obtenerTareas } from '../helpers/queries';
import { useState , useEffect} from 'react';


const ListaTareas = () => {

  const [tareas, setTareas]= useState([]);

  useEffect(()=>{
    obtenerTareas().then((respuesta)=>{
      console.log(respuesta);
      if (respuesta) {
        setTareas(respuesta);
    } else {
        Swal.fire(
            "Se produjo un error !",
            `Intentele realizar esta operacion  mas tarde.`,
            "error"
        );
    }
    })
  },[])
  return (
    <ListGroup>
       {tareas.map((tarea) => (
        <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;