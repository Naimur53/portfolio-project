import { height } from '@mui/system';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const RightContent = ({ isVisible, url }) => {
    const twing = {
        initial: {
            // opacity: 0,
            clipPath: 'circle(0.0% at 50% 50%)',

            // x: 200,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 }
        },
        animate: {
            // opacity: 1,
            // x: 0,
            // scale: 1,
            clipPath: ' circle(40.0% at 50% 50%)',
            transition: { delay: .4, ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }

        },
    }
    const main = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }
    return (
        <div className='absolute  inset-0 flex justify-center   flex-col items-center'>
            <AnimatePresence className='' initial={true}>
                {isVisible && (
                    <motion.div
                        key="modal"
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        variants={main}
                        className='font-family-Helvetica font-bold h-screen flex justify-center w-full items-center'
                    >

                        <motion.div
                            variants={twing} className='flex justify-center items-center bg-center   bg-cover w-96 2xl:w-full '>
                            <Image className='w-96 md:w-full  ' priority src={url} layout='raw' height={500} width={500} alt='photo'></Image>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RightContent;