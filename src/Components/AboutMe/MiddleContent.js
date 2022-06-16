import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const MiddleContent = ({ isVisible, invert, url, text, right }) => {
    const popIn = {
        initial: {
            opacity: 0,
            // x: right ? "200%" : "-200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, }
        },
        animate: {
            // x: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, }
        },
    }
    const textPop = {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            y: 0
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
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial='initial'
                    className='text-gray-400'
                    animate='animate'
                >
                    <div className={right ? 'text-right flex flex-col items-end' : ''}>
                        {
                            right && <div className='pt-5 pb-8'>
                                <motion.p
                                    className='about-text  '
                                    variants={sentence}
                                >
                                    {
                                        text.split(' ').map((single, i) => <motion.span key={i} variants={textPop} > {" " + single}</motion.span>)
                                    }
                                </motion.p>
                            </div>
                        }
                        <motion.div variants={popIn}>
                            <Image width={400} height={400} layout='raw' className={invert && "john-1"} priority src={url} alt='photo of Jonh'></Image>
                        </motion.div>
                        {
                            !right && <div className='py-10'>
                                <motion.p
                                    className='about-text  '
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
            )}
        </AnimatePresence>
    );
};

export default MiddleContent;