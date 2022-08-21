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
            setValue({ content6: true, content5: true })

        }
        else if (currentValue >= 3.5) {
            setValue({ content6: true, content5: true })
        }
        else if (currentValue >= 3) {
            setValue({ content5: true })

        }
        else if (currentValue >= 2.5) {
            setValue({ content4: true })

        }
        else if (currentValue >= 2.2) {
            setValue({ content3: true, })
            // setValue({ content2: true, })
        }
        else {
            setValue({ content1: true, })
        }
        if (currentValue <= 4) {
            setProgress((currentValue - 2) * 110)

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
            <div className="pt-14 pb-0 md:py-14  px-2 h-full">
                <Container sx={{ height: '100%' }}  >
                    <Grid container spacing={4} className='h-full '>
                        <Grid item md={6} xs={12} className=' h-1/2 md:h-full'>
                            <div className='flex flex-col h-full w-full relative justify-center  items-center'>
                                <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                                <RightContent isVisible={value.content2} url='https://i.ibb.co/DCSnXLn/photo-1605379399642-870262d3d051-2-1.jpg'></RightContent>
                                <RightContent isVisible={value.content3} url='https://i.ibb.co/60JhsKh/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-9-1.jpg'></RightContent>
                                <RightContent isVisible={value.content4} url='https://i.ibb.co/DpMw1zV/20161022-AIT-BEN-HABBOU-268-round.jpg'></RightContent>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className='h-1/2 md:h-full'>
                            <div className='h-full '>
                                <div className='h-full flex justify-center flex-col'>
                                    <div className='h-10 md:h-16 overflow-hidden  '>

                                        <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                        <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                        <HeadingText title='Global friendships' isVisible={value.content4}></HeadingText>
                                    </div>
                                    <div className=' h-36 md:h-auto    text-gray-300 overflow-hidden 2xl:h-auto pb-5'>
                                        <MiddleContent
                                            isVisible={value.content1}
                                            text={`People often ask me, "John, I'd like to buy a new camera. What do you recommend? I then explain to them that it doesn't matter which camera they buy. It is not the camera that takes the picture but the man or woman holding it. It is the vision of the photographer, the way he or she controls the light and the passion with which he or she photographs. But if you are going to take the step of buying another camera, for God's sake buy a Nikon. Nikon is always one step ahead of the others. With a Nikon you become a member of one big family. Nikon takes care of the photographer like a mother takes care of her children. That always gives me peace of mind. No matter where I am in the world, I can always count on Nikon.
                                            `}


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content2}
                                            text='hi arum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content3}
                                            text={`Sometimes film is just a little stronger than photography. You can show everything more in their context. That's when I deploy my Nikon as a film camera. I greatly enjoy making short films of the subjects I get in front of my lens in addition to photography.  Of course, it takes more preparation. For that, I always first make a rough sketch of what I want to tell with my film. Then I write a short scenario and make a shooting list of the fragments I think I need to tell my story.In practice I shoot much more material. You can never have enough. You find out when you start editing. I work with Adobe Premiere Pro. I am very satisfied with it. The Adobe tools allow me to give full rein to my creativity without any restrictions.
                                            
                                            `}
                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content4}
                                            text=' During our travels we make many friendships. People in the often very remote village usually do not speak those languages that I myself master. Therefore, we always look for someone who knows the region and speaks not only the regional language but also, for example, English. At the end of the story we figuratively take them all home. Filled with respect and warm memories we still have contact with them every now and then. Sabaty Yaya Bayo in West Africa, Hassan in Marrakesh, Razan in Romenia, Sanja and Tarik in Bosnia, John Hussey and Larry Tallmas in Maimi and Key West, Narsid Masleša in Lukomir,...and I could go on and on.
                                            
                                            Global friendships that are hard to leave behind and that I think back on with great regularity. I am very grateful to them.
                                            
                                    '
                                        ></MiddleContent>

                                    </div>




                                    {
                                        value.content1 || value.content2 || value.content3 || value.content4 ? <div className='flex justify-between items-center  text-xl mt-3 md:mt-0 w-52' >
                                            <div className='pr-4  text-gray-400'>
                                                {
                                                    value.content1 ? 1 : value.content2 ? 2 : value.content3 ? 2 : value.content4 ? 3 : 3
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
                        </Grid>

                    </Grid>
                    {/* 
                    
                    <div className='flex flex-col justify-evenly 2xl:justify-center h-screen'>
                        <div className=' p-10 bg-red- 50 2xl:mb-40'>
                            <div className='flex flex-col h-full  relative justify-center'>
                                <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                                {/* <RightContent isVisible={value.content2} url='https://i.ibb.co/DCSnXLn/photo-1605379399642-870262d3d051-2-1.jpg'></RightContent>  
                                <RightContent isVisible={value.content3} url='https://i.ibb.co/60JhsKh/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-9-1.jpg'></RightContent>
                                <RightContent isVisible={value.content4} url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'></RightContent>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' pt-5 justify-center flex items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='  h-16  overflow-hidden  '>

                                        <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                        {/* <HeadingText title='Web designer' isVisible={value.content2}></HeadingText>  
                                        <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                        <HeadingText title='Global friendships' isVisible={value.content4}></HeadingText>
                                    </div>
                                    <div className=' h-30 md:h-32 mt-2 md:mt-0 text-gray-300 overflow-hidden  '>
                                        <MiddleContent
                                            isVisible={value.content1}
                                            text={`People often ask me, "John, I'd like to buy a new camera. What do you recommend? I then explain to them that it doesn't matter which camera they buy. It is not the camera that takes the picture but the man or woman holding it. It is the vision of the photographer, the way he or she controls the light and the passion with which he or she photographs. 
                                            `}


                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content3}
                                            text={`Sometimes film is just a little stronger than photography. You can show everything more in their context. That's when I deploy my Nikon as a film camera. I greatly enjoy making short films of the subjects I get in front of my lens in addition to photography. 
                                            `}

                                        ></MiddleContent>
                                        <MiddleContent
                                            isVisible={value.content4}
                                            text={`During our travels we make many friendships. People in the often very remote village usually do not speak those languages that I myself master. Therefore, we always look for someone who knows the region and speaks not only the regional language but also, for example, English.`}
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
                    
                    */}
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