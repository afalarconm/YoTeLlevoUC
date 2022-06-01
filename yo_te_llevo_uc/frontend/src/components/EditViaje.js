import { useState } from 'react';
import Navbar from "./Navbar.js";
import axios from 'axios';
import React from 'react';
export default function Form() {

// States for registration
const [origen, setOrigen] = useState('');
const [destino, setDestino] = useState('');
const [cupos, setCupos] = useState('');
const [hora_inicio, setHoraInicio] = useState('');
const [comentarios, setComentarios] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleOrigen = (e) => {
	setOrigen(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleDestino = (e) => {
	setDestino(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handleCupos = (e) => {
	setCupos(e.target.value);
	setSubmitted(false);
};

// Handling hora_inicio change
const handleHoraInicio = (e) => {
    setHoraInicio(e.target.value);
    setSubmitted(false);
};

const handleComentarios = (e) => {
    setComentarios(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (origen === '' || destino === '' || cupos === '' || hora_inicio === '' || comentarios === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Viaje editado correctamente</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1 className="text-red-500 text-xs italic">Please enter all the fields</h1>
	</div>
	);
};

const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:3001/viajes/1").then((response) => {
      setPost(response.data)
    });
  }, []);

  function updatePost() {
    axios
      .put("http://localhost:3001/viajes/1", {
        origen: origen,
        destino: destino,
        cupos: cupos,
        hora_inicio: hora_inicio,
        detalles: comentarios,
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

return (
    <div className="App bg-gray-300 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-7 ">

            <form className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 '>
                <h1 className='text-2xl font-bold py-2 pb-2'>Edita tu viaje</h1>
                {/* Labels and inputs for form data */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Direccion de Origen</label>
                    <input onChange={handleOrigen} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={origen} type="text" placeholder='Origen' />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Direccion de Destino</label>
                    <input onChange={handleDestino} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={destino} type="text" placeholder='Destino' />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Hora de Inicio</label>
                    <input onChange={handleHoraInicio} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={hora_inicio} type="datetime-local" placeholder='Hora de partida' />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Cupos Disponibles</label>
                    <input onChange={handleCupos} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={cupos} type="text" placeholder="Cupos" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Detalles del Viaje</label>
                    <input onChange={handleComentarios} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={comentarios} type="text" placeholder="Detalles del viaje" contentEditable='true'/>
                </div>

                <div className=" place-items-center" align='center'>
                    <button onClick={updatePost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="submit">
                    Actualizar
                    </button>
                </div>
            </form>
        </div>
        <p class="text-center text-gray-500 text-xs pb-2">
            &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </p>

        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        
        
    </div>
);

}
