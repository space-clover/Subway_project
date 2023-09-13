// Nav_section.js
import React from 'react';
import { AiFillHome, AiFillShopping, AiOutlineHistory, AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

const Nav_section = ({ showSliderPage, showShopList, showPastList }) => {
  return (
    <motion.nav className='flex flex-col justify-between text-midnight-purple sticky left-2 top-16 w-0 z-10  h-85vh'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h1 className='text-xl font-bold -rotate-90'>SUMMER SPRING</h1>
        <ul className='flex font-bold flex-col text-light text-md h-30 justify-around'>
            <a
            className='cursor-pointer transition duration-500 hover:text-fiery-red'
            onClick={showSliderPage}
            >
            <AiFillHome className='text-2xl'/>
            </a>
            <a
            className='cursor-pointer transition duration-500 hover:text-fiery-red'
            onClick={showShopList}
            >
            <AiOutlineShoppingCart className='text-2xl'/>
            </a>
            <a
            className='cursor-pointer  transition duration-500 hover:text-fiery-red'
            onClick={showPastList}
            >
            <AiOutlineHistory className='text-2xl'/>
            </a>
        </ul>
        </motion.nav>
    );
};

export default Nav_section;
