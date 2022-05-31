import React, { useState } from "react";
import Navbar from "./Navbar.js";
import ReactDOM from "react-dom";
import Axios from "axios";



export default function Form() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const errors = {
    username: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var { username, pass } = document.forms[0];
    getUser(username.value, pass.value);
    setIsSubmitted(true);
  };

async function getUser(username, pass) {
try {
    const response = await Axios.post('http://localhost:5000/login', {
        params: {username, pass}}
        ).then(res => {
            console.log(res)
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                window.location.href = '/';
            }
        });

} catch (error) {
    console.error(error);
}
}


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="flex justify-center items-center py-7">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-2 pb-6 mb-3">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" required />
          {renderErrorMessage("username")}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Password </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="submit" />
        </div>
      </form>
    </div>
    
  );

  return (
    <div className="app">
        <Navbar />
      <div className="flex flex-col justify-center items-center py-7">
      <h1 className='text-2xl font-bold py-2 pb-2 '>Inicia Sesión</h1>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <p class="text-center text-gray-500 text-xs pb-2">
            &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </p>
    </div>
  );
}