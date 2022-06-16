import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const HeadingText = ({ isVisible, title1, title2, right }) => {
    const twing = {
        initial: {
            y: 300,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }

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
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial='initial'
                    animate='animate'
                    variants={main}
                    className='font-family-roboto font-bold'
                >
                    {
                        right ? <div className='flex justify-end'>

                            <div className=' '>
                                <div className='overflow-hidden  h-16'>
                                    <motion.h2 variants={twing} className='text-5xl m-0'>
                                        {title1}
                                    </motion.h2>
                                </div>
                                <div className='overflow-hidden   h-16'>
                                    <motion.h2 variants={twing} className='text-5xl m-0'>
                                        {title2}
                                    </motion.h2>
                                </div>
                            </div>
                        </div> : <div className=' '>
                            <div className='overflow-hidden  h-16'>
                                <motion.h2 variants={twing} className='text-5xl m-0 '>
                                    {title1}
                                </motion.h2>
                            </div>
                            <div className='overflow-hidden   h-16'>
                                <motion.h2 variants={twing} className='text-5xl m-0'>
                                    {title2}
                                </motion.h2>
                            </div>
                        </div>
                    } </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeadingText;