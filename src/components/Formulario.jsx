import {Form, Button, ListGroup} from 'react-bootstrap'
import ListaTareas from './ListaTareas';

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="texto" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
          Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;
