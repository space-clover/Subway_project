"use client"
import React, { Component } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineShoppingCart, IconName } from "react-icons/ai";


class DraggableSlider extends Component {
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
        <div className=" w-full">
            <Slider {...sliderSettings}>
            {items.map((item, index) => (
                <ul key={index} className="p-6 cursor-grab active:cursor-grabbing">
                    <li className="bg-beige  border-2 relative border-deep-blue text-deep-blue pt-12 justify-around flex flex-col items-center h-60vh xl:h-65vh w-full">
                        <AiOutlineShoppingCart className='absolute text-2xl transition duration-500 hover:text-midnight-purple z-30 cursor-pointer text-fiery-red top-2 right-3'/>
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
        </div>
        );
    }
}

export default DraggableSlider;
