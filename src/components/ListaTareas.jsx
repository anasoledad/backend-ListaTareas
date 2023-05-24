import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({listadoTareas}) => {
  return (
    <ListGroup>
      {
        listadoTareas.map((tarea, indice) => <ItemTarea key= {indice} tarea={tarea}></ItemTarea>)
      }
        
    </ListGroup>
  );
};

export default ListaTareas;
