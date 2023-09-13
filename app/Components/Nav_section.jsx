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
        <ul className='flex font-bold flex-col items-start text-light text-md h-30 justify-around'>
        <a  className="group flex flex-col items-center cursor-pointer" onClick={showSliderPage}>
            <AiFillHome  className="cursor-pointer  group-hover:text-fiery-red text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
            <div  className="absolute hidden text-center group-hover:block bg-deep-blue cursor-pointer  bg-opacity-60 text-pale-snow py-2 px-1.5 
                rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                Home
            </div>
        </a>
        <a  className="group flex flex-col items-center cursor-pointer" onClick={showShopList}>
            <AiOutlineShoppingCart className="cursor-pointer  group-hover:text-fiery-red text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
            <div className="absolute hidden text-center group-hover:block bg-deep-blue  bg-opacity-60 text-pale-snow py-2 px-1.5 
                rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                My cart
            </div>
        </a>
        <a  className="group flex flex-col items-center cursor-pointer" onClick={showPastList}>
            <AiOutlineHistory className="cursor-pointer  group-hover:text-fiery-red text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
            <div className="absolute hidden text-center group-hover:block bg-deep-blue  bg-opacity-60 text-pale-snow py-2 px-1.5 
                rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                My buys
            </div>
        </a>
        </ul>
        </motion.nav>
    );
};

export default Nav_section;
