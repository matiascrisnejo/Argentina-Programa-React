import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './componentes/Formulario';
import Cliente from './componentes/Cliente';
import { useEffect, useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';



function App() {

  //inicio localStorage
  let clientesGuardados = JSON.parse(localStorage.getItem('clientes'));
  if(!clientesGuardados){
    clientesGuardados = []
  };

  //generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState([]);

  //hook useEffect
  useEffect( () => {
    if (clientesGuardados) {
      localStorage.setItem('clientes', JSON.stringify(clientes));
    } else {
        localStorage.setItem('clientes', JSON.stringify([]));
    }
  }, [clientesGuardados]);

  //funcion que toma el socio nuevo y lo mete en el array de clientes
  const agregarCliente = (socio) => {
    editarClientes([
      ...clientes,
      socio
    ])
  };
  
  //funcion para borrar cliente
  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter( clientes => clientes.id !== id);
    editarClientes(nuevosClientes);
  }


  return (
    <>
      <Header/>
      <Container >
        <Row className='contenedor1'>
          <Col className='registroCliente'>
            <h1>Registro de Clientes</h1></Col>
          <Col className='listadoClientes'>
            {
              clientes.length > 0 ?
              <h1>Listado de Clientes Asociados</h1>
              :
              <h1>No Hay Clientes Registrados</h1>
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente = {agregarCliente}
            />
          </Col>
          <Col>
            {
              clientes.map( cliente => 
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                  borrarCliente={borrarCliente}
                />
                )
            }
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );

}

export default App;
