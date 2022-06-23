import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Axios from 'axios';
import useAuth from '../hooks/useAuth';
import { AuthContext } from "../contexts/AuthContext.jsx";


export default function Form() {




// States for registration
const [name, setName] = useState(localStorage.getItem('username'));
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirmation, setPasswordConfirmation] = useState('');
const { currentUser } = useAuth();

// States for checking the errors

const authContext = React.useContext(AuthContext);


// Handling the name change
const handleName = (e) => {
	setName(e.target.value);

};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);

};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
};

const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (password === '') {

	} else {

    updateUser(name, email, password, passwordConfirmation);
                    }   
};

const handleDelete = (e) => {
    e.preventDefault();
    deleteUser();
}

function deleteUser() {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };
    Axios.delete(`http://localhost:3001/users/${currentUser.id}`, requestOptions)
        .then(response => {
            console.log(response);
            authContext.handleUserLogout();
        });
}

function updateUser(name, email, password, passwordConfirmation) {
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };
    const data = {
        userName: name || currentUser.username,
        email: email || currentUser.email,
        password: password,
        passwordConfirmation: passwordConfirmation
    }
    Axios.patch(`http://localhost:3001/users/${currentUser.id}`, data, requestOptions)
    .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.href = '/Profile';
    })
    .catch(err => {
        console.log(err);
    })
}



// Showing success message


// Showing error message if error is true


return (
    <div className="App bg-gray-300 min-h-screen">
        <Navbar />
        <div  className="flex justify-center items-center py-7 ">

            <form className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 '>
                <h1 className='text-2xl font-bold py-2 pb-2'>Edita tus datos</h1>
                {/* Labels and inputs for form data */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de Usuario</label>
                    <input onChange={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name} type="text" placeholder= {currentUser.username} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input onChange={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email} type="email" placeholder='user@uc.cl' />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirma los cambios con tu contraseña</label>
                    <input onChange={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={password} type="password" placeholder="******************" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirma tu Contraseña</label>
                    <input onChange={handlePasswordConfirmation} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={passwordConfirmation} type="password" placeholder="******************" />
                </div>

                <div className=" place-items-center" align='center'>
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="submit">
                    Actualizar
                    </button>

                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="button">Eliminar Perfil</button>
                </div>
            </form>
        </div>
        <p class="text-center text-gray-500 text-xs pb-2">
            &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </p>

    </div>

);
}
 // End of Form

