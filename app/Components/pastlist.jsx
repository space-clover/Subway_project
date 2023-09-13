import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { motion } = require("framer-motion");

const Pastlist = () => {
    const [historyData, setHistoryData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/history')
            .then((response) => {
                setHistoryData(response.data[0]); 
            })
            .catch((error) => {
                console.error('Error al obtener los datos de historial:', error);
            });
    }, []);

    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            <h1 className='text-2xl text-deep-blue font-bold'>Historial de Compras</h1>
            <div>
                {historyData ? (
                    historyData.map((item, index) => (
                        <div key={index} className="historial-item text-dee">
                            <li className="bg-beige  border-2 relative border-deep-blue text-deep-blue pt-12 justify-around flex items-center h-12vh xl:h-12vh w-full">
                                <p className='text-md font-light'>SS/20</p>
                                <h1 className='text-3xl text-deep-blue font-oswald tracking-tighter text-center break-words  '>{item.name}</h1>
                                <div className='flex flex-col items-center justify-around mb-5'>
                                    <p className='text-sm font-semibold line-through' >{item.price}</p>
                                    <p className='text-xl font-semibold'>{item.discount}</p>
                                </div>     
                            </li>
                        </div>
                    ))
                ) : (
                    <div className="text-deep-blue">No hay datos disponibles.</div>
                )}
            </div>
        </motion.section>
    );
};

export default Pastlist;
