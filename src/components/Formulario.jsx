import { Form, Button, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ListaTareas from './ListaTareas';
import { useForm } from 'react-hook-form';
import { consultaCrearTarea, obtenerTareas } from '../helpers/queries';
import Swal from 'sweetalert2';

const Formulario = () => {
  const [tareas, setTareas] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (tareaNueva) => {
    console.log(tareaNueva);
    // realizar la petición que agrega el producto a la API
    consultaCrearTarea(tareaNueva).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "La tarea fue creada",
          `La tarea ${tareaNueva.nombreTarea} fue creada`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Se produjo un error",
          "Intete realizar esta operacion mas tarde",
          "error"
        );
      }
    });
  };
  useEffect(() => {
    // Obtener la lista de tareas al cargar el componente
    obtenerTareas().then((respuesta) => {
      if (respuesta) {
        setTareas(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error",
          "Intente realizar esta operación más tarde",
          "error"
        );
      }
    });
  }, []);


  return (
    <section className="d-flex justify-content-center">
      <Col xs={11} md={8}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3 d-flex" controlId="tarea">
            <Form.Control
              type="text"
              className="me-2"
              placeholder="Ingrese una tarea"
              {...register('nombreTarea', {
                required: 'El nombre de la tarea es obligatorio',
                minLength: {
                  value: 2,
                  message: 'La cantidad mínima de caracteres es de 2 dígitos',
                },
                maxLength: {
                  value: 100,
                  message: 'La cantidad máxima de caracteres es de 100 dígitos',
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreTarea?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        <div>

<ListaTareas tareas={tareas} setTareas={setTareas} />

        </div>
      </Col>
    </section>
  );
};

export default Formulario;