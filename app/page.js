"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Welcome_prom from './Components/welcome_prom'
import DraggableSlider from './Components/Slider_page'
import Nav_section from './Components/Nav_section';
import Shoplist from './Components/Shoplist';
import axios from 'axios';
import Pastlist from './Components/pastlist';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [items, setItems] = useState([]);
  const [currentComponent, setCurrentComponent] = useState("Slider_page");

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

  const showSliderPage = () => {
    setCurrentComponent("Slider_page");
  };

  const showShopList = () => {
    setCurrentComponent("Shoplist");
  };

  const showPastList = () => {
    setCurrentComponent("Pastlist");
  };

  return (
    <main className="flex min-h-screen relative bg-pale-snow ">
      <Nav_section
        showSliderPage={showSliderPage}
        showShopList={showShopList}
        showPastList={showPastList}
      />
      <section className='flex flex-col w-full px-8 py-3'> 
        <Welcome_prom />
        <AnimatePresence  mode="wait">
          {currentComponent === "Slider_page" && (
            <motion.div
              key="Slider_page"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1 }}
            >
              <DraggableSlider items={items} />
            </motion.div>
          )}
          {currentComponent === "Shoplist" && (
            <motion.div
              key="Shoplist"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1 }}
            >
              <Shoplist />
            </motion.div>
          )}
          {currentComponent === "Pastlist" && (
            <motion.div
              key="Pastlist"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1 }}
            >
              <Pastlist />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
