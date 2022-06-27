import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

const ViajeDetails = () => {
    let navegar = useNavigate()
    const { id } = useParams()
    const [viaje, setViaje] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useAuth();
    const [error, setError] = useState(null);
    const [rating, setRating] = useState([]);
    const [voted, setVoted] = useState(false);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };

    useEffect(() => {
        fetch(`https://yo-te-llevo-api.herokuapp.com/viajes/${id}`, requestOptions)
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

    const requestOptions2 = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };

    useEffect(() => {
        fetch(`https://yo-te-llevo-api.herokuapp.com/review/viaje/${id}`, requestOptions2)
            .then(response => response.json())
            .then(data => {
                setRating(data);
            })
            .catch(error => {
                console.log('Ha ocurrido un error',error);
                setError(error);
            });
    }, []);


    if (!currentUser) {
        return <h1>¡No estas Logueado!</h1>
    }

    if (voted === true) {
        var element = document.getElementById("rating");
        element.style.display = "none";
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
        Axios.delete(`https://yo-te-llevo-api.herokuapp.com/viajes/${id}`, requestOptions)
            .then(response => {
                console.log(response);
                window.location.href = '/Viajes';
            })
    }

    // rate viaje
    const rateViaje = (review) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        };
        if (review === 'like') {
            const data = {
                like: true,
                dislike: false,
                criticado: viaje.UserId,
                ViajeId: viaje.id,
                UserId: currentUser.id,
            }
            Axios.post(`https://yo-te-llevo-api.herokuapp.com/review/new`, data, requestOptions)
            .then(response => {
                console.log(response);
                setVoted(true);

            });
        } else {
            const data = {
                like: false,
                dislike: true,
                criticado: viaje.UserId,
                ViajeId: viaje.id,
                UserId: currentUser.id,
            }
            Axios.post(`https://yo-te-llevo-api.herokuapp.com/review/new`, data, requestOptions)
            .then(response => {
                console.log(response);
                setVoted(true);
                
            });
        }
        
    }



    return (
    
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        {error? <h1>{error.message}</h1>: null}
        {isLoading ? <h1>Cargando...</h1>: null}

        <div className="flex-col py-7" align='center'>
            
            <div className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 max-w-md'>
            <h1 className='text-center text-xl font-bold'>Detalles del Viaje</h1>
            <br/>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Origen: {viaje.origen}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Destino: {viaje.destino}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-mediummb-2">Cupos: {viaje.cupos}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium marker:selection:mb-2">Dia: {dateFormat(viaje.hora_inicio, "dd/mm/yy")}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium marker:selection:mb-2">Hora: {dateFormat(viaje.hora_inicio, "h:MM TT")}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Precio: ${viaje.Precio}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Detalles: {viaje.detalles}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Likes: {rating.hearts} <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/83713/like.svg'></img></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium mb-2">Dislikes: {rating.haters} <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/161803/dislike.svg'></img> </label>
            </div>

            <div className='py-3'>
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center"><a href='/Viajes'>Volver</a></button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => editViaje(id)} style={{display: currentUser.id === viaje.UserId ||currentUser.admin===true? "": "none"}} > Editar Viaje</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => deleteViaje(id)} style={{display: currentUser.id === viaje.UserId ||currentUser.admin===true? "": "none"}}>Eliminar</button>
            </div>
            


            </div>

            <div id='rating' className='bg-white shadow-md rounded-lg px-12 pt-2 pb-6 mb-3 max-w-sm justify-self-cente' style={{display: currentUser.id === viaje.UserId ? "none": ""}} >
                <h2 className='text-center text-xl'>Califica al Conductor</h2>
                <br/>
                <div className="mb-4">
                <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => rateViaje('like')}> <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/83713/like.svg'></img></button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => rateViaje('dislike')}> <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/161803/dislike.svg'></img> </button>
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
