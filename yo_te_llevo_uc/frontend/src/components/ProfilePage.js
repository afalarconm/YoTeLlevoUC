import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useAuth();
    const [error, setError] = useState(null);
    const [rating, setRating] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3001/users/${currentUser.id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUser(data);
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
        fetch(`http://localhost:3001/review/user/${currentUser.id}`, requestOptions2)
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


    return (
    
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        {error? <h1>{error.message}</h1>: null}
        {isLoading ? <h1>Cargando...</h1>: null}

        <div className="flex justify-center py-7">
            <div className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 '>

            <h1 className="text-2xl font-bold text-left pl-7">Perfil</h1>
            <br />
            <div align='center' className='pb-5'>
                <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="user" className="w-12 h-12 rounded-full mr-4" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium  mb-2">Username: {user.userName}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium  mb-2">Email: {user.email}</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium ">Likes: {rating.hearts} <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/83713/like.svg'></img></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium ">Dislikes: {rating.haters } <img className='object-scale-down h-4 w-4' src='https://www.svgrepo.com/show/161803/dislike.svg'></img> </label>
            </div>


            <div className='py-3' align='center'>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center"><a href='/EditProfile'> Editar Perfil</a></button>
            </div>
            


            </div>
            
        </div>
            <p class="text-center text-gray-500 text-xs pb-2">
                &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
            </p>
        </div>
    )
}

export default ProfilePage;
