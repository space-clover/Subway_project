"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Welcome_prom from './Components/welcome_prom'
import DraggableSlider from './Components/Slider_page'
import Nav_section from './Components/Nav_section';
import Shoplist from './Components/Shoplist';
import axios from 'axios';
export default function Home( { }) {
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
    <main className="flex min-h-screen relative bg-pale-snow ">
      <Nav_section/>
      <section className='flex flex-col w-full px-8 py-3'> 
        <Welcome_prom/>
        <DraggableSlider items={items} />
        <Shoplist/>
      </section>


    </main>
  )
}
