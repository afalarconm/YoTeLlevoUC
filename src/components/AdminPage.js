import Navbar from "./Navbar.js";
import Axios from "axios";  
import { useState, useEffect} from "react";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";



const AdminPage = () => {

    let navegar = useNavigate()
    const { currentUser } = useAuth();
    const [user, setUser] = useState([]);

    const [viajes, setViajes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    //get all users
    useEffect(() => {
    if (Object.keys(usuarios).length === 0) {
        const getUsuarios = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${currentUser.token}`
                }
            };
            const response = await Axios.get(`http://localhost:3001/users/all`, requestOptions);
            setUsuarios(response.data);
        }
        getUsuarios();
    }
    }, [usuarios]);

    
    //get all viajes
    useEffect(() => {
        if (Object.keys(viajes).length === 0) {
            const getViajes = async () => {
                const requestOptions2 = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                };
                const response2 = await Axios.get(`http://localhost:3001/viajes`, requestOptions2);
                setViajes(response2.data);
            }
            getViajes();
        }
    }, [viajes]);

    if (!currentUser) {
        return <h1>¡No estas Logueado!</h1>
    } else if (currentUser.admin === false) {
        return <h1>¡No eres administrador!</h1>
    }



function deleteUser(id_user) {
    const requestOptions3 = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    };
    Axios.delete(`http://localhost:3001/users/${id_user}`, requestOptions3)
        .then(response => {
            console.log(response);
            window.location.reload();
        });
}

const deleteViaje = (id_viaje) => {
    const requestOptions4 = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }};
    Axios.delete(`http://localhost:3001/viajes/${id_viaje}`, requestOptions4)
        .then(response => {
            console.log(response);
            window.location.reload();
        })
}

    const Tabla=usuarios.map(
        (info)=>{
            if (info.userName !== "admin") {
                return(
                <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.userName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.email}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button onClick={() => deleteUser(info.id)} className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Eliminar Usuario</button>
                    </td>

                </tr>
                     )
                  }
                }
                )   

    const Tabla2=viajes.map(
        (info)=>{
                return(
                <tr>
                   <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" key={info.id} >{info.origen}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.destino}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.cupos}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{dateFormat(info.hora_inicio, "dd/mm/yy h:MM TT")}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.detalles}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >${info.Precio}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline content-center" onClick={() => deleteViaje(info.id)}>Eliminar Viaje</button>
                    </td>

                </tr>
                        )
                    }
                )  







    return (
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        <div class="flex-1">
        <div class="px-4 sm:px-6 lg:px-8 py-4">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 className="text-2xl font-bold text-center text-gray-900">Admin Page</h1>
                </div>
            </div>
            <h2 class="text-xl font-semibold text-gray-900">Usuarios</h2>
            <p class="mt-2 text-sm text-gray-700">Listado de Usarios</p>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="table-fixed min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">id</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Username</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                {Tabla}
                             
                    
                                </tbody>
                                
                     
                                
                          
                                
                                
                            </table>
                        </div>
                    </div>
                </div>
                <br />
            <h2 class="text-xl font-semibold text-gray-900">Viajes</h2>
            <p class="mt-2 text-sm text-gray-700">Listado de viajes</p>
            <div class="mt-8 flex flex-col">
                <div class="mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="table-fixed min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Origen</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Destino</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cupos</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Hora de Inicio</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Comentarios</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Precio Individual</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                {Tabla2}
                             
                    
                                </tbody>
                                
                     
                                
                          
                                
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
        <footer class="text-center text-gray-500 text-xs">
         &copy;Tecnologías y Aplicaciones Web - Grupo 23 - 2022.
        </footer>


        </div>
    
    );
}

export default AdminPage;
