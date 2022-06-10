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

        // if (scrollValue > 1) {
        //     // console.log();
        //     eleRef.current.style.left = ` ${scrollValue * 10}%`;
        // }
        // else {
        //     eleRef.current.style.left = `100%`
        // }

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
    const handleClick = () => {
        setValue(!value)
    }
    return (
        <div ref={container} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={handleMouseMove} className='  relative'>
            {
                // value && <motion.div
                //     initial={{ opacity: 0 }}
                //     whileInView={{ opacity: 1 }}
                //     exit={{ opacity: 0 }}
                //     viewport={{ once: false }}
                // >

                // </motion.div>
                <HeadingText title='Nikon
                    Photographer' isVisible={value}></HeadingText>
            }
            <button onClick={handleClick} className='p-2 bg-red-300'>clicme </button>
            {/* middle man */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <MiddleContent
                        isVisible={true}
                        url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                    ></MiddleContent>
                </Grid>
                <Grid item xs={12} md={6}>
                    <MiddleContent
                        isVisible={true}
                        url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'
                        right

                    ></MiddleContent>
                </Grid>

            </Grid>
            <div className='flex justify-end'>

                <div className='w-1/2'>
                    <h2 className='text-7xl text-right'>
                        Website
                        <br />
                        Designer
                    </h2>
                </div>
            </div>
            <div ref={eleRef} className='absolute about-overlay  bg-white'>

            </div>
        </div>
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