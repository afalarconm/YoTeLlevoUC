import Navbar from "./Navbar.js";
// import {useEffect, useState } from 'react';
import dateFormat from "dateformat";
import Axios from "axios";  
import { useState, useEffect} from "react";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";




const baseURL = "http://localhost:3001/viajes";
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>



export default function App() {
    let navegar = useNavigate()
    const { currentUser } = useAuth();
    const [user, setUser] = useState([]);

    const navigate = useNavigate()
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);


    useEffect(() => {
        Axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;


    // agregar al usuario como pasajero del viaje
    const agregarPasajero = (viaje) => {
        
        viaje.Pasajeros.push(user.id)
        viaje.cupos -= 1

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        };
        const data = {
            origen: viaje.origen,
            destino: viaje.destino,
            cupos: viaje.cupos,
            hora_inicio: viaje.hora_inicio,
            detalles: viaje.detalles,
            Precio: viaje.Precio,
            Pasajeros: viaje.Pasajeros
        };
        Axios.put(`http://localhost:3001/viajes/join/${viaje.id}`, data, requestOptions)
        .then(response => {
            console.log(response.data);
            window.location.reload()
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    // ir a pagina del viaje
    const verViaje = (id) => {
        navegar(`/ViajeDetails/${id}`)
    }



    const Tabla=post.map(
        (info)=>{
            if (user) {
                return(
                    <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" key={info.id} >{info.origen}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.destino}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.cupos}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{dateFormat(info.hora_inicio, "dd/mm/yy h:MM TT")}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.detalles}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" style={{display: info.cupos === 0 ? "Lleno":""}} >${info.Precio}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button onClick={() => agregarPasajero(info)} style={{display: info.Pasajeros.includes(user.id)||info.UserId === user.id || info.cupos === 0 ? "none": ""}}  className="focus:outline-none text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800">Unirme!</button>
                    <button onClick={() => verViaje(info.id)} style={{display: info.Pasajeros.includes(user.id)? "": "none"}} className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800">Ver detalles</button>
                    <button onClick={() => verViaje(info.id)} style={{display: info.UserId === user.id? "": "none"}} className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800">Ver mi Viaje</button>
                </td>
                </tr>
            )} else if (!user) {
                return(
                    <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" key={info.id} >{info.origen}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.destino}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.cupos}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{dateFormat(info.hora_inicio, "dd/mm/yy h:MM TT")}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >{info.detalles}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" style={{display: info.cupos === 0 ? "Lleno":""}} >${info.Precio}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"></td>
                </tr>
                )   
            }
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
                    <button type="button" onClick={() => navigate("/CreateViaje")}  style={{display: user ? "": "none"}} class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 mr-2 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Añadir viaje</button>
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
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Precio Individual</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
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


