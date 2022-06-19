import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const HeadingText = ({ isVisible, title }) => {
    const twing = {
        initial: {
            y: 300,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },

        animate: {
            y: 0,
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
        <AnimatePresence initial={true}>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial='initial'
                    animate='animate'
                    exit='initial'
                    variants={main}
                    className='font-family-roboto font-bold'
                >

                    <div className=' '>
                        <div className='overflow-hidden font-family-allerta  h-16'>
                            <motion.h2 variants={twing} className='text-5xl m-0'>
                                {title}
                            </motion.h2>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeadingText;