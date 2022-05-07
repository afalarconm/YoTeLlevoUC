import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Navbar />
      <section class="w-full h-screen bg-hero bg-cover bg-center">

        <div class="flex justify-center items-center h-4/6 flex-col">
          <h1 className="text-7xl text-white font-bold mx-auto max-w-6xl">
            <span class="bg-gradient-to-r bg-clip-text" >Bienvenido a Yo Te Llevo UC!</span>
          </h1>
          <h2 className="text-4xl text-white max-w-6xl text-left">
            <span class="bg-gradient-to-r bg-clip-text">La plataforma N1 para organizar tus turnos a la universidad</span>
          </h2>
        </div>
        
        <button type="button" onClick={() => navigate("/Login")} class="text-whte-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400">Inicia Sesión</button>
        <button type="button" onClick={() => navigate("/Register")} class="text-white-900 hover:text-white border border-white hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-20 py-6 text-center mr-5 mb-5 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400">Registrate</button>
        </section>




      </div>
  );
}

export default App;
