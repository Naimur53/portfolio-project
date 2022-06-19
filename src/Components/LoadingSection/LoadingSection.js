import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const LoadingSection = ({ isVisible }) => {
    const twing = {
        initial: {
            x: '100%',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        exit: {
            x: '-100%',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },

        animate: {
            x: 0,
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
        <AnimatePresence>
            {
                isVisible && <motion.div
                    key="modal"
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={main}
                    className='font-family-roboto font-bold '
                >

                    <motion.div variants={twing} style={{ zIndex: '9000000000000000000000000000000000000000000000000000' }} className=' h-screen fixed flex justify-center items-center w-full bg-black '>
                        Jonh is thinking
                    </motion.div>
                </motion.div>

            }

        </AnimatePresence>
    );
};

export default LoadingSection;