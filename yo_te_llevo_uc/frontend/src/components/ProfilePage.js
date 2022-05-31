import Navbar from './Navbar';
import { useState } from 'react';
import Axios from 'axios';

export default function Form() {

    const datos = { username: localStorage.getItem('username'), email: 'user@uc.cl', viajes: ['[Campus San Joaquin, Su Casa]'] };
    const [user, setUser] = useState(datos.username);
    const [email, setEmail] = useState(datos.email);
    const [viajes, setViajes] = useState(datos.viajes);

    async function fetchUser() {
        try {
            await Axios.post('http://localhost:3001/users', { params: datos.username }
        ).then(res => {
            console.log(res)
            setUser(res.data.username);
            setEmail(res.data.email);
            setViajes(res.data.viajes);
        });

    } catch (error) {
        console.error(error);
    }
}

    return (
        fetchUser(),
        
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        <div className="flex justify-center py-7">
            <div className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3'>
            
            <div className="pl-10 pb-3">
                <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="user" className="w-12 h-12 rounded-full mr-4" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Username: {user}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Email: {email}</label>
                <label></label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-medium font-bold mb-2">Viajes: {viajes}</label>
            </div>

            <div className='py-3'>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center">Editar Perfil</button>
            </div>


            </div>
        </div>
        </div>
    )
}
