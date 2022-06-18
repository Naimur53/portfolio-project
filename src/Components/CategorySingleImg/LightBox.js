import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
const LightBox = ({ isVisible, url, onClose }) => {
    console.log(onClose);
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='h-screen z-large p-5 bg-black'
                >
                    <div className='h-full  flex justify-center relative'>
                        <div className='absolute top-0 right-20'>
                            <button onClick={() => {
                                console.log('click');
                                onClose()
                            }}><CloseIcon></CloseIcon></button>


                        </div>
                        <Image className='w-full preview-img ' priority layout='raw' src={url} height={700} width={700}

                            placeholder="blur"
                            blurDataURL={'https://i.ibb.co/d5vyKBh/840ed3be08183d22497b38e60c0b5918-1-1.jpg'} alt='photo'></Image>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LightBox;