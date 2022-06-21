import Navbar from "./Navbar.js";
// import {useEffect, useState } from 'react';
// import { response } from "../../../back/src/utils/app.js";
import Axios from "axios";  
import { useState, useEffect} from "react";
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from "react-router-dom";




const baseURL = "http://localhost:3001/viajes";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>



export default function App() {
    let navegar = useNavigate()
    const { currentUser } = useAuth();
    const [user, setUser] = useState(null)
    useEffect(() => {
        setUser(currentUser)
    }, [currentUser]);


    // const{backendData, setBackendData} = useState([{}])

    // useEffect(() => {
    //     fetch("/api").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // })
    const navigate = useNavigate()
    const [post, setPost] = useState(null);

    useEffect(() => {
        Axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;

    const editViaje = (id) => {
        localStorage.setItem('id_viaje', id)
        navegar(`/EditViaje/${id}`)
    }

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

    


    const Tabla=post.map(
        (info)=>{
            const id_viaje = "/EditViaje/"+info.id
            return(
                <tr>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" key={info.id} >{info.origen}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.destino}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.cupos}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.hora_inicio}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.detalles}</td>

                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button onClick={() => editViaje(info.id)} style={{display: currentUser ? "": "none"}}  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Editar</button>
                <button onClick={() => deleteViaje(info.id)} style={{display: currentUser ? "": "none"}}  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>

             </td>
            </tr>
            )
        }
    )



    return (
        <div className="App bg-gray-300 min-h-screen">
        <Navbar />

        <div class="flex-1">
    <div class="flex-1">
     
        <div class="px-4 sm:px-6 lg:px-8 py-4">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-xl font-semibold text-gray-900">Viajes</h1>
                    <p class="mt-2 text-sm text-gray-700">El listados de todos los viajes disponibles hasta el momento.</p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" onClick={() => navigate("/CreateViaje")}  style={{display: currentUser ? "": "none"}} class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Añadir viaje</button>
                </div>
            </div>
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="table-fixed min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Origen</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Destino</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cupos</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Hora de Inicio</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Comentarios</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only" >Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                {Tabla}
                             
                    
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


