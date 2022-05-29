import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar.js";




export default function Form() {
    const navigate = useNavigate()
    return (
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-7 ">

            <form className='bg-white shadow-md rounded px-10 pt-2 pb-6 mb-4 '>
                <h1 className='text-2xl font-bold py-2 pb-2'>Inicia Sesión</h1>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Nombre de Usuario
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Contraseña
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
                <div class="flex items-center justify-between">
                <button onClick={() => navigate("/LogedIn")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Ingresar
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-3" href="/">
                    Olvidaste tu contraseña?
                </a>
                </div>
                
            </form>

        </div>
        <p class="text-center text-gray-500 text-xs">
         &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </p>


        </div>
    
    );
}