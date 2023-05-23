import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';

function App() {


  return (
    <>
      <Container className='my-5 mainPage'>
        <h1 className='display-4 text-center'>Lista de Tareas</h1>
        <hr/>
        {/* aqui agrego el formulario */}
        <Formulario></Formulario>
      </Container>
      
      <footer className='bg-dark text-light text-center py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App
