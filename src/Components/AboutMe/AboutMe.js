import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion';
import HeadingText from './HeadingText';
import MiddleContent from './MiddleContent';

const AboutMe = () => {
    const { scrollValue, homeCategory } = useSelector(allData)
    const [value, setValue] = useState(true);

    const eleRef = useRef()
    const container = useRef()
    useEffect(() => {


        if (scrollValue > 1.5) {
            // console.log();
            setValue(true)
        }
        else {
            setValue(false);
        }
    }, [scrollValue])
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        eleRef.current.style.left = ` ${x}px`;
        e.stopPropagation();
    }
    const mouseEnter = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        eleRef.current.style.transition = `all .3s ease-out`;
        eleRef.current.style.left = ` ${x}px`;
        setTimeout(() => {
            eleRef.current.style.transition = `none`;

        }, 400)
        e.stopPropagation();
    }
    const mouseLeave = e => {
        eleRef.current.style.transition = `all .7s ease-out`;
        // eleRef.current.style.left = `100%`;
        e.stopPropagation();
    }
    return (
        <div ref={container} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={handleMouseMove} className=' py-14 relative  px-2'>
            <Grid container spacing={2}>
                {/* left  */}
                <Grid item xs={6}>
                    <div className='flex flex-col items-between justify-between h-'>
                        <div className='h-40 overflow-hidden'>
                            <HeadingText title1='Nikon' title2='Photographer' isVisible={value}></HeadingText>
                            <HeadingText title1='Website' title2='Designer' isVisible={!value}></HeadingText>
                        </div>
                        <div >
                            <MiddleContent
                                isVisible={value}
                                url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'
                                text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                            ></MiddleContent>
                            <MiddleContent
                                isVisible={!value}
                                url='https://i.ibb.co/mFRGKVP/photo-1605379399642-870262d3d051-1.jpg'
                                text='Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design;'


                            ></MiddleContent>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    {/* right  */}
                    <div className='flex flex-col items-between justify-between h-full'>

                        <MiddleContent
                            isVisible={value}
                            url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'
                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'
                            right

                        ></MiddleContent>
                        <MiddleContent
                            isVisible={!value}
                            url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'
                            text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip'
                            right

                        ></MiddleContent>
                        <div className='h-40 overflow-hidden'>
                            <HeadingText title1='Film' title2='Maker' right isVisible={value}></HeadingText>
                            <HeadingText title1='Curious ' title2='Traveler' right isVisible={!value}></HeadingText>
                        </div>
                    </div>
                </Grid>

            </Grid>




            <div ref={eleRef} className='absolute about-overlay  bg-white'>

            </div>
        </div >
    );
};

export default AboutMe;
{/* <Grid container spacing={2}>
<Grid item xs={6} md={6}>
    <Box
        className="w-full bg-red-400 bg-cover bg-center grayscale"
        sx={{
            background: 'url(https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg)',
            height: '60vh'
        }}

    >

    </Box>
</Grid>
<Grid item xs={6} md={6}>
    <div className='h-full px-10 bg-gray-900'>
        <h1 className='text-2xl text-justify pt-5'>About Me</h1>
        <hr className='w-10 mt-5' />
        <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
        <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
        <button className='mt-5  border-b'>Hire me &gt;</button>

    </div>
</Grid>



</Grid> */}