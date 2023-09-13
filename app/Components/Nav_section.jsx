import React from 'react'
import { AiFillShopping, IconName } from "react-icons/ai";
const { motion } = require("framer-motion");
const Nav_section = () => {
    return (
        <motion.nav className='flex flex-col justify-between text-midnight-purple sticky left-2 top-16 w-0 z-10  h-85vh'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <h1 className='text-xl font-bold -rotate-90'>SUMMER SPRING</h1>
            <ul className='flex  font-bold flex-col text-light text-md'>
                <a href='app\List.js' className='cursor-pointer transition duration-500 hover:text-fiery-red '><AiFillShopping className='text-4xl'/></a>
                <a className='cursor-pointer flex flex-nowrap transition duration-500 hover:text-fiery-red'>PAST BUYS</a>
            </ul>
        </motion.nav>
    )
}

export default Nav_section