import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditarTarea from './components/EditarTarea';
 
function App() {


  return (
    <>
      <BrowserRouter>
        <Container className='my-5 mainPage'>
          <h1 className='display-5 text-center fw-bold'>Lista de Tareas</h1>
          <hr />
          {/* Aquí agrego el formulario */}
          <Routes>
            <Route path="/" element={<Formulario />} />
            <Route path='/editarTarea/:_id' element={<EditarTarea />} />
            {/* Agrega otras rutas según tus necesidades */}
          </Routes>
        </Container>

        <footer className='bg-dark text-light text-center py-4'>
          <p>&copy; Todos los derechos reservados</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App
