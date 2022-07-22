import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
const ParallaxLayerBackground = ({ offset, speed, style }) => {
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
                <div className='w-full flex items-end  h-full relative'>

                    <Image className='w-full mt-5  ' src='https://i.ibb.co/Y0wzDQY/GRID-for-movement-on-background.png' width={700} height={100} alt='background web' priority layout='raw'></Image>

                    <motion.div
                        className='bg-black absolute inset-0'
                        initial={{
                            x: ' 0%'
                        }}
                        whileInView={{
                            x: '100%',
                            transition: { type: 'ease', duration: 1 }
                        }}
                    >

                    </motion.div>

                </div>
            </div>
        </ParallaxLayer>
    );
};

export default ParallaxLayerBackground;