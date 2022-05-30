import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material';

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { EffectCube, Autoplay, EffectCreative, Navigation } from "swiper";

const ImgSlider = ({ data }) => {
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
    return (
        <div className='relative'>
            <div>
                <Swiper
                    spaceBetween={50}
                    modules={[EffectCreative, Autoplay, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        duration: 2400,
                        disableOnInteraction: false,
                    }}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
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
                >
                    {
                        data.map((single, i) => <SwiperSlide key={i}>
                            <Image src={single.url} height={618} width={1060} alt='d'></Image>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <Stack justifyContent='space-between' direction='row' sx={{
                position: 'absolute',
                top: '50%',
                width: '100%',

            }}>

                {
                    <IconButton className='bg-black transition hover:bg-black transation-all hover:text-gray-50 text-gray-400' sx={btnStyle} onClick={() => my_swiper.slidePrev()}>
                        <ArrowBackIosNewIcon ></ArrowBackIosNewIcon>
                    </IconButton>
                }
                {
                    <IconButton className='bg-black transition hover:bg-black transation-all hover:text-gray-50 text-gray-400' onClick={() => my_swiper.slideNext()}
                        sx={btnStyle}
                    ><ArrowForwardIosIcon  ></ArrowForwardIosIcon></IconButton>
                }

            </Stack>
        </div>
    );
};

export default ImgSlider;