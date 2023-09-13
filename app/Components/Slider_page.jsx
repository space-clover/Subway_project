"use client"
import React, { Component } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { AiOutlineShoppingCart,} from "react-icons/ai";
import { IconName, LuPencilRuler } from "react-icons/lu";
const { motion } = require("framer-motion");


class DraggableSlider extends Component {
    addToCart(item) {
        axios.post('http://localhost:5000/lista', item)
            .then((response) => {
            console.log('Elemento agregado al carrito:', response.data);
            })
            .catch((error) => {
                console.error('Error al agregar al carrito:', error);
            });
        }
    
render() {
    const { items } = this.props;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 2,
    };

        return (
        <motion.div className=" w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Slider {...sliderSettings}>
            {items.map((item, index) => (
                <ul key={index} className="p-6 cursor-grab active:cursor-grabbing">
                    <li className="bg-beige  border-2 relative border-deep-blue text-deep-blue pt-12 justify-around flex flex-col items-center h-60vh xl:h-65vh w-full">
                        <LuPencilRuler className='absolute text-3xl transition duration-500 hover:text-midnight-purple z-30 cursor-pointer text-fiery-red top-2 left-2'
                        onClick={() => this.change(item)}/>
                        <AiOutlineShoppingCart className='absolute text-3xl transition duration-500 hover:text-midnight-purple z-30 cursor-pointer text-fiery-red top-2 right-3'
                        onClick={() => this.addToCart(item)}/>
                        <div className='flex items-end justify-center h-40'>                       
                        <Image
                        src={item.image}
                        className='' 
                        alt="Sneaker"
                        width={400} 
                        height={0} /></div>
                        <p className='text-md font-light'>SS/20</p>
                        <h1 className='text-6xl text-deep-blue font-oswald tracking-tighter text-center break-words  '>{item.name}</h1>
                        <div className='flex flex-col items-center justify-around mb-5'>
                            <p className='text-sm font-semibold line-through' >{item.price}</p>
                            <p className='text-xl font-semibold'>{item.discount}</p>
                        </div>     
                    </li>
                </ul>
            ))}
            </Slider>
        </motion.div>
        );
    }
}

export default DraggableSlider;

