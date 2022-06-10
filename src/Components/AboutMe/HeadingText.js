import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const HeadingText = ({ isVisible, title, right }) => {
    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {
                        right ? <div className='flex justify-end'>

                            <div className='w-1/2'>
                                <h2 className='text-7xl text-right'>
                                    {title}
                                </h2>
                            </div>
                        </div> : <div className='w-1/2'>
                            <h2 className='text-7xl'>
                                {title}
                            </h2>
                        </div>
                    } </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeadingText;