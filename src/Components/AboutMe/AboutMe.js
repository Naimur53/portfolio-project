import { Container, Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { AnimatePresence, motion } from 'framer-motion';
import HeadingText from './HeadingText';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';

const AboutMe = ({ innerRoute }) => {
    const { scrollValue, homeCategory } = useSelector(allData)
    const [value, setValue] = useState({ content1: true, content2: false, content3: false, content4: false, content5: false, content6: false });
    const [progress, setProgress] = useState(0)

    const eleRef = useRef()
    const container = useRef()
    const currentValue = scrollValue.toFixed(1)
    useEffect(() => {
        console.log(currentValue);
        if (currentValue >= 4) {
            setValue({ content5: true, content6: true })
        }
        else if (currentValue >= 3.5) {
            setValue({ content5: true })
        }
        else if (currentValue >= 3) {
            setValue({ content4: true })

        }
        else if (currentValue >= 2.5) {

            setValue({ content3: true, })
        }
        else if (currentValue >= 2.1) {
            setValue({ content2: true, })
        }
        else {
            setValue({ content1: true, })
        }
        if (currentValue < 3.5) {
            setProgress((currentValue - 2) * 72)

        }
    }, [currentValue])
    console.log(progress);
    const handleMouseMove = e => {
        if (container.current) {

            let x = e.clientX - container.current?.getBoundingClientRect().left;

        }
        eleRef.current.style.left = ` ${x}px`;
        e.stopPropagation();
    }
    const mouseEnter = e => {
        if (container.current) {

        }
        let x = e.clientX - container.current?.getBoundingClientRect().left
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
    const last = {
        initial: {
            opacity: 0,
            clipPath: 'circle(70.7% at 49% 100%)'
        },
        animate: {
            opacity: 1,
            clipPath: 'circle(100.1% at 50% 86%)',
            transition: { delay: .3 }
        }
    }
    return (
        <motion.div exit={{ opacity: 0 }} ref={container} className='  relative   h-screen'>
            <div className="py-14 px-2 h-full">
                <Container sx={{ height: '100%' }}  >
                    {/* <Grid container spacing={4} className='h-full '>
                        <Grid item md={6} xs={12} className=' h-1/2 md:h-full'>
                            <div className='flex flex-col h-full  relative justify-center'>
                                <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                                <RightContent isVisible={value.content2} url='https://i.ibb.co/DCSnXLn/photo-1605379399642-870262d3d051-2-1.jpg'></RightContent>
                                <RightContent isVisible={value.content3} url='https://i.ibb.co/60JhsKh/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-9-1.jpg'></RightContent>
                                <RightContent isVisible={value.content4} url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'></RightContent>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className='h-1/2 md:h-full'>
                            <div className='h-full flex items-center'>
                                <div>
                                    <div className='h-12 overflow-hidden  '>

                                        <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                        <HeadingText title='Web designer' isVisible={value.content2}></HeadingText>
                                        <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                        <HeadingText title='Curious  Traveler' isVisible={value.content4}></HeadingText>
                                    </div>
                                    <div className=' h-30 md:h-28 mt-2 md:mt-5 text-gray-300 overflow-hidden  '>
                                        <MiddleContent
                                            isVisible={value.content1}
                                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content2}
                                            text='hi arum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content3}
                                            text='A filmmaker is in charge of making, leading, and developing movie productions. It is a career that allows an individual to use their leadership as well as creative thinking skills to lead and direct major motion pictures or made-for-television films.
                                    '
                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content4}
                                            text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip
                                    '
                                        ></MiddleContent>

                                    </div>



                                    <div className='flex justify-between items-center  text-xl mt-3 md:mt-0 w-52' >
                                        <div className='pr-4  text-gray-400'>
                                            {
                                                value.content1 ? 1 : value.content2 ? 2 : value.content3 ? 3 : 4
                                            }
                                        </div>

                                        <LinearProgress className='w-full rounded-lg' variant="determinate" sx={{
                                            background: 'rgb(17 24 39) ', '& .MuiLinearProgress-bar1Determinate': {
                                                backgroundColor: 'rgb(107 114 128 )',
                                            }
                                        }} value={progress} />
                                        <div onClick={() => innerRoute(4)} className='pl-4 cursor-pointer'>
                                            4

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Grid>

                    </Grid> */}
                    <div className='flex flex-col justify-evenly 2xl:justify-center h-screen'>
                        <div className=' p-10 bg-red- 50 2xl:mb-40'>
                            <div className='flex flex-col h-full  relative justify-center'>
                                <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                                <RightContent isVisible={value.content2} url='https://i.ibb.co/DCSnXLn/photo-1605379399642-870262d3d051-2-1.jpg'></RightContent>
                                <RightContent isVisible={value.content3} url='https://i.ibb.co/60JhsKh/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-9-1.jpg'></RightContent>
                                <RightContent isVisible={value.content4} url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'></RightContent>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' pt-5 justify-center flex items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='  h-16  overflow-hidden  '>

                                        <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                        <HeadingText title='Web designer' isVisible={value.content2}></HeadingText>
                                        <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                        <HeadingText title='Curious  Traveler' isVisible={value.content4}></HeadingText>
                                    </div>
                                    <div className=' h-30 md:h-28 mt-2 md:mt-0 text-gray-300 overflow-hidden  '>
                                        <MiddleContent
                                            isVisible={value.content1}
                                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content2}
                                            text='hi arum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content3}
                                            text='A filmmaker is in charge of making, leading, and developing movie productions. It is a career that allows an individual to use their leadership as well as creative thinking skills to lead and direct major motion pictures or made-for-television films.
                                    '
                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content4}
                                            text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip
                                    '
                                        ></MiddleContent>

                                    </div>



                                    {
                                        value.content1 || value.content2 || value.content3 || value.content4 ? <div className='flex justify-between items-center  text-xl mt-3 md:mt-0 w-52' >
                                            <div className='pr-4  text-gray-400'>
                                                {
                                                    value.content1 ? 1 : value.content2 ? 2 : value.content3 ? 3 : 4
                                                }
                                            </div>

                                            <LinearProgress className='w-full rounded-lg' variant="determinate" sx={{
                                                background: 'rgb(17 24 39) ', '& .MuiLinearProgress-bar1Determinate': {
                                                    backgroundColor: 'rgb(107 114 128 )',
                                                }
                                            }} value={progress} />
                                            <div onClick={() => innerRoute(4)} className='pl-4 cursor-pointer'>
                                                4

                                            </div>
                                        </div> : <div></div>
                                    }
                                </div>

                            </div>
                        </div>


                    </div>
                </Container>
            </div>
            <motion.div
                initial='initial'
                variants={last}
                animate={value.content5 ? "animate" : 'initial'}
                className='absolute  bg-transparent  pointer-events-none inset-0 py-10 '

            >


                <div className="flex items-center justify-center h-full">
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div className="text-3xl font-thin text-heading md:text-5xl font-family-Helvetica">
                            <MiddleContent
                                isVisible={value.content5}
                                text=' May I also ask you to take the time.
                            '


                            ></MiddleContent>
                        </div>
                        <div className="text-xl text-contentText mt-5 w-full md:w-1/2">
                            <MiddleContent
                                delay={1}
                                isVisible={value.content5}
                                text=' I have taken the time to take my photos. I did it with passion and endless patience. May I also ask you to take the time to look at my work. Preferably not on your smart phone but if it can’t be otherwise … Try to become one with the image and feel what happened when I took the photo.
                            '
                            ></MiddleContent>
                        </div>

                    </div>
                </div>

            </motion.div>
        </motion.div >
    )

};

export default AboutMe; 