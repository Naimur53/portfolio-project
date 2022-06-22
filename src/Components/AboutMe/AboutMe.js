import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { AnimatePresence, motion } from 'framer-motion';
import HeadingText from './HeadingText';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';

const AboutMe = () => {
    const { scrollValue, homeCategory } = useSelector(allData)
    const [value, setValue] = useState({ content1: true, content2: false, content3: false, content4: false, content5: false, content6: false });
    const [progress, setProgress] = useState(0)

    const eleRef = useRef()
    const container = useRef()
    const currentValue = scrollValue.toFixed(1)
    useEffect(() => {
        console.log(currentValue);
        if (currentValue > 2.8) {
            setValue({ content5: true, content6: true })
        }
        else if (currentValue > 2.6) {
            setValue({ content5: true })
        }
        else if (currentValue > 2.4) {
            setValue({ content4: true })
            setProgress(100)

        }
        else if (currentValue > 2.2) {
            setProgress(60)

            setValue({ content3: true, })
        }
        else if (currentValue > 2) {
            setProgress(30)
            setValue({ content2: true, })
        }
        else {
            setProgress(0)
            setValue({ content1: true, })
        }
    }, [currentValue])
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
        <div ref={container} className=' py-14 relative  px-2 h-screen'>

            <Grid container spacing={4} className='h-full'>
                <Grid item md={6} xs={12} className='h-full'>
                    <div className='h-full flex items-center'>
                        <div>
                            <div className=' h-14 overflow-hidden'>

                                <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                <HeadingText title='Web designer' isVisible={value.content2}></HeadingText>
                                <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                <HeadingText title='Curious  Traveler' isVisible={value.content4}></HeadingText>
                            </div>
                            <div className='h-28 mt-5 text-gray-300 overflow-hidden'>
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



                            <div className='flex justify-between items-center  text-xl  w-52' >
                                <div className='pr-4'>
                                    {
                                        progress === 0 ? 1 : progress === 30 ? 2 : progress === 60 ? 3 : progress === 100 && 4
                                    }
                                </div>

                                <LinearProgress className='w-full rounded-lg' variant="determinate" color='inherit' value={progress} />
                                <div className='pl-4'>
                                    4

                                </div>
                            </div>
                        </div>

                    </div>
                </Grid>
                <Grid item md={6} xs={12} className='h-full '>
                    <div className='flex flex-col h-full  relative justify-center'>
                        <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                        <RightContent isVisible={value.content2} url='https://i.ibb.co/mFRGKVP/photo-1605379399642-870262d3d051-1.jpg'></RightContent>
                        <RightContent isVisible={value.content3} url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'></RightContent>
                        <RightContent isVisible={value.content4} url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'></RightContent>
                    </div>

                </Grid>
            </Grid>
            <motion.div
                initial='initial'
                variants={last}
                animate={value.content5 ? "animate" : 'initial'}
                className='absolute bg-black  inset-0 py-10 '

            >
                <div className="flex items-center justify-center h-full">
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div className="text-5xl font-family-allerta">
                            <MiddleContent
                                isVisible={value.content5}
                                text=' May I also ask you to take the time.
                            '


                            ></MiddleContent>
                        </div>
                        <div className="text-xl text-gray-300 mt-5 w-1/2">
                            <MiddleContent
                                isVisible={value.content6}
                                text=' I have taken the time to take my photos. I did it with passion and endless patience. May I also ask you to take the time to look at my work. Preferably not on your smart phone but if it can’t be otherwise … Try to become one with the image and feel what happened when I took the photo.
                            '
                            ></MiddleContent>
                        </div>

                    </div>
                </div>

            </motion.div>
        </div>
    )

};

export default AboutMe;

// return (
//     <div ref={container} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={handleMouseMove} className=' py-14 relative  px-2'>
//         <Grid container spacing={2}>
//             {/* left  */}
//             <Grid item xs={6}>
//                 <div className='flex flex-col items-between justify-between h-'>
//                     <div className='h-40 overflow-hidden'>
//                         <HeadingText title1='Nikon' title2='Photographer' isVisible={value}></HeadingText>
//                     </div>
//                     <div >
//                         <MiddleContent
//                             isVisible={value}
//                             url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'
//                             text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


//                         ></MiddleContent>
//                     </div>
//                 </div>
//             </Grid>
//             <Grid item xs={6}>
//                 {/* right  */}
//                 <div className='flex flex-col items-between justify-between h-full'>

//                     <MiddleContent
//                         isVisible={value}
//                         url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'
//                         text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'
//                         right

//                     ></MiddleContent>
//                     <MiddleContent
//                         isVisible={!value}
//                         url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'
//                         text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip'
//                         right

//                     ></MiddleContent>
//                     <div className='h-40 overflow-hidden'>
//                         <HeadingText title1='Film' title2='Maker' right isVisible={value}></HeadingText>
//                         <HeadingText title1='Curious ' title2='Traveler' right isVisible={!value}></HeadingText>
//                     </div>
//                 </div>
//             </Grid>

//         </Grid>




//         <div ref={eleRef} className='absolute about-overlay  bg-white'>

//         </div>
//     </div >
// );