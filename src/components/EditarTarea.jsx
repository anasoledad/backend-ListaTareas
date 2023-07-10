import { Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { consultaEditarTarea, obtenerTarea } from "../helpers/queries";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const EditarTarea = ({ show, onHide, tarea }) => {
  const { _id } = useParams();
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerTarea(_id).then((respuesta) => {
      console.log(respuesta);
      setValue("nombreTarea", respuesta.nombreTarea);
    });
  }, [_id, setValue]);

  const onSubmit = (tareaEditada) => {
    console.log(tareaEditada);
    consultaEditarTarea(tareaEditada, _id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Tarea actualizada",
          `La tarea "${tareaEditada.nombreTarea}" fue actualizada correctamente`,
          "success"
        );
        navegacion("/");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `La tarea "${tareaEditada.nombreTarea}" no fue actualizada, inténtelo nuevamente más tarde`,
          "error"
        );
      }
    });
  };

  const handleClose = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formNombreTarea">
            <Form.Label>Nombre de la Tarea</Form.Label>
            <Form.Control
              type="text"
              className="me-2"
              placeholder="Ingrese una tarea"
              {...register("nombreTarea", {
                required: "El nombre de la tarea es obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad mínima de caracteres es de 2 dígitos",
                },
                maxLength: {
                  value: 100,
                  message: "La cantidad máxima de caracteres es de 100 dígitos",
                },
              })}
              defaultValue={tarea.nombreTarea}
            />
            <Form.Text className="text-danger">
              {errors.nombreTarea?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditarTarea;
