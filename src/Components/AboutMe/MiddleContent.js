import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const MiddleContent = ({ isVisible, url, text, right }) => {
    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className={right ? 'text-right flex flex-col items-end' : ''}>
                        <Image width={400} height={400} layout='raw' className='john-2' priority src={url} alt='photo of Jonh'></Image>
                        <p className='about-text'>{text}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MiddleContent;