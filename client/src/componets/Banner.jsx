import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { bannerData } from '../constants';
import Container from './Container';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };

    return (
        <div className='w-full max-h-[600px]'>
            <Slider {...settings}>
                {
                    bannerData.map((item, index) => (
                        <div className='relative' key={index}>
                            <img src={item?.image} alt="bannerImg"
                                className='h-full lg:h-[550px] w-full object-cover'
                            />
                            <div className='absolute top-0 left-0 w-full h-full bg-black/20'>
                                <Container className="flex flex-col justify-center gap-2 md:gap-3 h-full">
                                    <p className='w-24 py-1 px-2 bg-red-600 text-white text-xs uppercase text-center font-medium tracking-wide rounded-md  '>{item?.sale}</p>
                                    <h2 className='text-xl md:text-5xl max-w-sm  md:max-w-xl font-bold md:leading-[55px] capitalize'>{item?.title}</h2>
                                    <p className='text-xs md:text-base uppercase font-medium'>{item?.discount}</p>
                                    <p className='font-medium text-sm md:text-base'>From <span className='md:text-xl font-bold text-blue-700 md:ml-2'> ${item?.from}</span></p>
                                    <button className='w-24 md:w-44 py-2 md:py-0 md:h-12 bg-black/80 text-white rounded-md text-xs md:text-sm uppercase font-sermibold hover:bg-black hoverEffect'>Shop Now</button>
                                </Container>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Banner