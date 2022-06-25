import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const LoadingSection = ({ isVisible }) => {
    const twing = {
        initial: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },

        animate: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }

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
        <>

            <motion.div initial='initial' animate={isVisible ? "animate" : 'initial'} variants={twing} style={{ zIndex: '9000000000000000000' }} className=' h-screen absolute flex inset-0 justify-center items-center w-full bg-black '>
                <div id='preloader'>
                    <p className="text-center">John is thinking</p>
                </div>
            </motion.div>

        </>
    );
};

export default LoadingSection;