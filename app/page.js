"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Welcome_prom from './Components/welcome_prom'
import DraggableSlider from './Components/Slider_page'
import axios from 'axios';
export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/items') 
      .then((response) => {
        setItems(response.data); 
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <main className="flex min-h-screen bg-pale-snow flex-col items-center  p-8">
      <Welcome_prom/>
      <DraggableSlider items={items} />
    </main>
  )
}
