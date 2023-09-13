import React from 'react'
const { motion } = require("framer-motion");
const Welcome_prom = () => {
    return (
        <section className='w-full flex justify-between'>
            <motion.div className='w-1/2 pb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <h2 className='text-3xl tracking-tighter font-bold text-deep-blue'>An independent brand of urban products</h2>
                <div className='text-9xl border-b-deep-blue border-b-4  font-bold text-righ text-fiery-red '>
                SPRING,<br/><h2 className='flex items-baseline text-9xl text-fiery-red 
                font-bold'> SUMMER </h2>   
            </div>
            </motion.div>
            <motion.div className='w-1/2 p-3'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}>
                <div className='border-2 border-deep-blue h-full w-full p-2'>

                </div>
            </motion.div>
        </section>
    )
}

export default Welcome_prom