import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const ViajeDetails = () => {
    let navegar = useNavigate()
    const { id } = useParams()
    const [viaje, setViaje] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useAuth();
    const [error, setError] = useState(null);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3001/viajes/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setViaje(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Ha ocurrido un error',error);
                setError(error);
            });
    }, []);

    if (!currentUser) {
        return <h1>¡No estas Logueado!</h1>
    }

    const editViaje = (id) => {
        localStorage.setItem('id_viaje', id)
        navegar(`/EditViaje/${id}`)
    }

    // eliminar viaje
    const deleteViaje = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }};
        Axios.delete(`http://localhost:3001/viajes/${id}`, requestOptions)
            .then(response => {
                console.log(response);
                window.location.href = '/Viajes';
            })
    }

    return (
    
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        {error? <h1>{error.message}</h1>: null}
        {isLoading ? <h1>Cargando...</h1>: null}

        <div className="flex justify-center py-7">
            
            <div className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 '>
            <h1 className='text-center text-xl font-bold'>Detalles del Viaje</h1>
            <br/>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Origen: {viaje.origen}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Destino: {viaje.destino}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Cupos: {viaje.cupos}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Hora: {viaje.hora_inicio}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Precio: ${viaje.precio}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Detalles: {viaje.detalles}</label>
            </div>

            <div className='py-3'>
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center"><a href='/Viajes'>Volver</a></button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => editViaje(id)} style={{display: currentUser ? "": "none"}} > Editar Viaje</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => deleteViaje(id)} style={{display: currentUser ? "": "none"}}>Eliminar</button>
            </div>
            


            </div>
            
        </div>
            <p class="text-center text-gray-500 text-xs pb-2">
                &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
            </p>
        </div>
    )
}

export default ViajeDetails;
