import { useState } from 'react';
import Navbar from "./Navbar.js";
import Axios from 'axios';
export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirmation, setPasswordConfirmation] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
//     Axios.post("https://localhost:3001/register",{
//         username: name,
//         password: password,
//         email: email,
// }).then((response) => {
//     console.log(response);
// });

// 	setError(false);
// 	}
// };

const register = (e)=> {
    e.preventDefault();
    Axios.post("http://localhost:3001/register",{
        username: name,
        password: password,
        passwordConfirmation: passwordConfirmation,
        email: email,
    
}).then((response) => {
    console.log(response);
    if (response.status === 201) {
        setSubmitted(true);
        setError(false);
        window.location.href = "/login";
    }
    else {
        setSubmitted(false);
        setError(true);
        errorMessage(response.data.error);
    }

});
}


// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = (error) => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1 className="text-red-500 text-xs italic">{error}Please enter all the fields</h1>
	</div>
	);
};

return (
    <div className="App bg-gray-300 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-7 ">

            <form className='bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3 '>
                <h1 className='text-2xl font-bold py-2 pb-2'>Crea tu Usuario</h1>
                {/* Labels and inputs for form data */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de Usuario</label>
                    <input onChange={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name} type="text" placeholder='Username' />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input onChange={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email} type="email" placeholder='user@uc.cl' />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                    <input onChange={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={password} type="password" placeholder="******************" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirma tu Contraseña</label>
                    <input onChange={handlePasswordConfirmation} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={passwordConfirmation} type="password" placeholder="******************" />
                </div>

                <div className=" place-items-center" align='center'>
                    <button onClick={register} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="submit">
                    Registrarme
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
