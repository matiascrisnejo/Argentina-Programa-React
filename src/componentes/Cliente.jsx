import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './cliente.css'

const Cliente = ({cliente, borrarCliente}) => {
    return ( 
        <>
            <Badge bg="secondary" className="cuadradito">
                <p>Nombre: {cliente.nombre}</p>
                <p>DNI: {cliente.dni}</p>
                <Button 
                    variant="light"
                    onClick={ () => borrarCliente(cliente.id)}
                    >Borrar</Button>
            </Badge>
            
        </>
    );
}

export default Cliente;