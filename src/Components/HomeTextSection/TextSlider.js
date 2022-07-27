import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material';

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/effect-fade";
import { motion } from 'framer-motion'


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
const TextSlider = () => {
    const [my_swiper, set_my_swiper] = useState({});
    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });
    const btnStyle = {
        backgroundColor: 'black',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 40%)',
        zIndex: '999'

    }
    const textStyle = 'text-4xl md:text-5xl 2xl:text-5xl text-center font-thin ';
    return (
        <Container sx={{ height: '100%' }} className=' relative'>
            <Swiper
                spaceBetween={50}
                modules={[Autoplay, EffectFade,]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                slidesPerView={1}
                grabCursor={true}
                onSlideChange={(ev) => {
                    set_my_swiper(ev)

                    set_my_swiper_status({
                        isBeginning: ev.isBeginning,
                        isEnd: ev.isEnd,
                    })
                }}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
                className='h-full'
            >
                <SwiperSlide className=' flex justify-center items-center' >
                    <h2

                        className={textStyle}>
                        Don’t over
                        <br />
                        organize.
                        <br />
                        Be on time and
                        <br />
                        stay until you are
                        <br />
                        completely
                        <br />
                        satisfied.
                    </h2>
                </SwiperSlide>
                <SwiperSlide className=' flex justify-center items-center' >
                    <h2

                        className={textStyle}>
                        Today’s shot is
                        <br />
                        better than
                        <br />
                        the one i did
                        <br />
                        yesterday.
                        <br />
                        That’s why
                        <br />
                        i love tomorrow

                    </h2>
                </SwiperSlide>
                <SwiperSlide className=' flex justify-center items-center'>
                    <h2

                        className={textStyle}>
                        Every photographer
                        <br />
                        has a camera.
                        <br />
                        But,...not everyone
                        <br />
                        with a camera
                        <br />
                        is a photographer.


                    </h2>
                </SwiperSlide>
                <SwiperSlide className=' flex justify-center items-center'>
                    <h2

                        className={textStyle}>
                        Taking’ a picture is
                        <br />  a form of theft.
                        <br />
                        Therefore I create
                        <br /> my images.

                    </h2>
                </SwiperSlide>
                <SwiperSlide className=' flex justify-center items-center'>

                    <h2

                        className={textStyle}>
                        To capture the moment
                        <br />
                        you must see the light


                    </h2>
                </SwiperSlide>
            </Swiper>
            <div className="mt-4  z-10 absolute left-1/2 bottom-32 -translate-x-1/2  ">

                <div className=''>
                    <button className='mr-5 text-contentText hover:text-white' onClick={() => my_swiper.slidePrev()}>

                        <ArrowBackIcon></ArrowBackIcon>
                    </button>
                    <button onClick={() => my_swiper.slideNext()} className='text-contentText hover:text-white'>

                        <ArrowForwardIcon></ArrowForwardIcon>
                    </button>
                </div>
            </div>
        </Container >
    );
};

export default TextSlider;