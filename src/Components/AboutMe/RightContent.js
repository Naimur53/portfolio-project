import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const RightContent = ({ isVisible, url }) => {
    const twing = {
        initial: {
            // opacity: 0,
            clipPath: 'circle(0.0% at 50% 50%)',

            // x: 200,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        animate: {
            // opacity: 1,
            // x: 0,
            // scale: 1,
            clipPath: 'circle(47.5% at 50% 50%)',
            transition: { delay: .8, ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }

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
        <div className='absolute inset-0 flex justify-center   flex-col'>
            <AnimatePresence className='' initial={true}>
                {isVisible && (
                    <motion.div
                        key="modal"
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        variants={main}
                        className='font-family-roboto font-bold h-screen '
                    >

                        <motion.div
                            style={{
                                backgroundImage: `url(${url})`
                            }}
                            variants={twing} className=' bg-center h-full bg-cover w-full'>
                            <Image className='w-full  invisible' priority layout='raw' src={url} height={400} width={400} alt='photo'></Image>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RightContent;