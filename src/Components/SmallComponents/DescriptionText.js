import React from 'react';
import { motion } from 'framer-motion'
const DescriptionText = ({ text }) => {
    const textPop = {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            y: 0,

        }
    }
    const sentence = {
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
        <motion.div
            key="modal"
            initial='initial'
            className='text-gray-300'
            animate='animate'
        >
            <div  >
                {
                    <div className=''>
                        <motion.p
                            variants={sentence}
                        >
                            {
                                text.split(' ').map((single, i) => <motion.span key={i} variants={textPop} > {" " + single}</motion.span>)
                            }
                        </motion.p>
                    </div>
                }

            </div>
        </motion.div>
    );
};

export default DescriptionText;