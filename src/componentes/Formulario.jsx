import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import './formulario.css'



const Formulario = ({agregarCliente}) => {

    //creo un socio vacio y lo inicializo con un hook de estado
    const [socio, editarSocio] = useState({
        nombre: "",
        dni: ""
    });

    //extraer los valores
    const {nombre,dni} = socio;

    //creo otro hook de estado para manejar el error
    const [error, setError] = useState(false);

    //recogo lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();

        //validar el formulario             trim()= elimina los espacios
        if(nombre.trim() === "" || dni.trim() === ""){
            setError(true);
            return;
        }

        //manejar el error(quita el mensaje)
        setError(false);

        //poner un id
        socio.id = uuidv4();
        console.log(socio);

        //guardar el socio
        agregarCliente(socio);

        //limpiar formulario
        editarSocio({
            nombre:"",
            dni:""
        })

    }




    return (
        <>
            <Form onSubmit={submitForm} className="formulario">
                <Form.Group >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre Completo" 
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label className="dni">DNI</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sin puntos ni espacios" 
                        name="dni"
                        onChange={handleChange}
                        value={dni}/>
                </Form.Group>
                <Button
                    className="boton"
                    variant="success" 
                    type="submit">
                    Ingresar Socio
                </Button>
            </Form>
            {
                error
                ? <h4>Completar todos los campos</h4>
                : null
            }
        </>
    );
}

export default Formulario;