import { ParallaxLayer } from '@react-spring/parallax';
import React, { useRef } from 'react';
import { motion, } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
const ParallaxLayerBackground = ({ offset, speed, style }) => {

    const [ref, inView] = useInView()
    console.log({ offset, inView });
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={style}
        >
            <div
                style={{
                    backgroundImage: 'url(https://i.ibb.co/RDC3Vh4/e-Ugu-V6-Yo-2.png)'

                }}
                className="banner-wrap h-full w-full">
                <div ref={ref} className='w-full flex h-full items-end   '>
                    <motion.div

                        className="relative w-full"

                    // initial={{
                    //     width: '0%'
                    // }}
                    // animate={inView ? {
                    //     width: '100%',
                    //     transition: { type: 'ease', duration: 1 }
                    // } : {
                    //     width: '0%'
                    // }}

                    >

                        <Image className='w-full mt-15  ' src='https://i.ibb.co/0cjqwrp/GRID-for-movement-on-background-5.png' width={700} height={100} alt='background web' priority layout='raw'></Image>

                        <motion.div
                            className='bg-black absolute inset-0 shadow-overlay'

                            initial={{
                                x: ' 0%'
                            }}
                            animate={inView ? {
                                x: '100%',
                                transition: { type: 'ease', duration: 1 }
                            } : {
                                x: ' 0%'
                            }}
                        >

                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </ParallaxLayer >
    );
};

export default ParallaxLayerBackground;