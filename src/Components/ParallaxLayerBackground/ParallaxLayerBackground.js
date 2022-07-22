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
                    backgroundImage: 'url(https://i.ibb.co/K6Jgp1K/Background.jpg)'

                }}
                className="banner-wrap h-full w-full">
                <div ref={ref} className='w-full flex items-end  h-full relative'>

                    <Image className='w-full mt-15  ' src='https://i.ibb.co/Y0wzDQY/GRID-for-movement-on-background.png' width={700} height={100} alt='background web' priority layout='raw'></Image>

                    <motion.div
                        className='bg-black absolute inset-0'
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

                </div>
            </div>
        </ParallaxLayer >
    );
};

export default ParallaxLayerBackground;