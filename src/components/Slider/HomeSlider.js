'use client'

import useAllProduct from '@/hooks/useAllProduct';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlider = async () => {

    const data = await useAllProduct();
    console.log(data.products);

    return (
       
             <Carousel showArrows={true} autoPlay showThumbs={false}>

                {
                    data.products?.map( thu =>  <div key={thu.id}>
                        <img alt="profile"
                                className='w-full h-56 rounded-lg shadow-lg' 
                                src={thu.thumbnail} />
                    </div>)
                }
               
            </Carousel>
       
    );
};

export default HomeSlider;