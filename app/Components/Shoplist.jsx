"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const { motion } = require("framer-motion");
import { IconName, TiBackspaceOutline, TiTimes } from "react-icons/ti";
const Shoplist = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/lista') 
            .then((response) => {
            setItems(response.data); 
            console.log(response.data)
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    const deleteItem = (itemToDelete) => {
        axios.delete(`http://localhost:5000/lista/${itemToDelete.id}`)
            .then((response) => {
                setItems((prevItems) => prevItems.filter(item => item.id !== itemToDelete.id));
                console.log('Elemento eliminado con éxito:', response.data);
            })
            .catch((error) => {
                console.error('Error al eliminar el elemento:', error);
            });
    };
    const deleteItemFromDatabase = (itemId) => {
        return axios.delete(`http://localhost:5000/lista/${itemId}`);
    };

    
    const checkout = () => {
        axios.post('http://localhost:5000/history', items)
            .then((response) => {
                console.log('Datos enviados al historial con éxito:', response.data);
                const deletePromises = items.map((item) => deleteItemFromDatabase(item.id));

                Promise.all(deletePromises)
                    .then((deleteResponses) => {
                        console.log('Elementos eliminados de la base de datos con éxito:', deleteResponses);
                        setItems([]);
                    })
                    .catch((deleteError) => {
                        console.error('Error al eliminar elementos de la base de datos:', deleteError);
                    });
            })
            .catch((error) => {
                console.error('Error al agregar al historial:', error);
            });
    };
    return (
        <section className='flex'>
        <motion.div className='w-3/6'
        nitial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
            <h1 className='text-6xl text-fiery-red font-bold'>Estas son las compras que has realizado</h1>
            <p className='text-2xl text-deep-blue font-bold mt-2'>Te vas o quieres seguir navegando?</p>
            <div className='flex justify-end pr-4 mt-2'>
                <button className='py-2 px-3  bg-bright-orange rounded-xl text-pale-snow' onClick={checkout}>Pago mis compras</button>
            </div>
        </motion.div>
        <motion.div className=" w-2/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            {items.map((item, index) => (
                <ul key={index} className="py-6 cursor-grab active:cursor-grabbing">
                    <li className="bg-beige  border-2 relative border-deep-blue text-deep-blue pt-12 justify-around flex items-center h-12vh xl:h-12vh w-full">
                        <TiBackspaceOutline className='absolute text-3xl transition duration-500 hover:text-midnight-purple z-30 cursor-pointer text-fiery-red top-2 right-3'
                        onClick={() => deleteItem(item)}/>
                        <p className='text-md font-light'>SS/20</p>
                        <h1 className='text-3xl text-deep-blue font-oswald tracking-tighter text-center break-words  '>{item.name}</h1>
                        <div className='flex flex-col items-center justify-around mb-5'>
                            <p className='text-sm font-semibold line-through' >{item.price}</p>
                            <p className='text-xl font-semibold'>{item.discount}</p>
                        </div>     
                    </li>
                </ul>
            ))}
        </motion.div>
        <div>

        </div>
        </section>
    )
}

export default Shoplist