import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { consultaBorrarTarea, obtenerTareas } from "../helpers/queries";
import { Link } from "react-router-dom";
import EditarTarea from "./EditarTarea";

const ItemTarea = ({ tarea, setTareas }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const borrarTarea = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar esta tarea?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarTarea(tarea._id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "La tarea fue eliminada",
              `La tarea ${tarea.nombreTarea} fue eliminada`,
              "success"
            );
            obtenerTareas().then((respuesta) => setTareas(respuesta));
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operación más tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.nombreTarea}
      <div className="d-flex">
        <Button
          variant="warning"
          className="me-2"
          onClick={handleOpenModal}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={borrarTarea}>
          Borrar
        </Button>
      </div>
      <EditarTarea
        show={showModal}
        onHide={handleCloseModal}
        tarea={tarea}
      />
    </ListGroup.Item>
  );
};

export default ItemTarea;