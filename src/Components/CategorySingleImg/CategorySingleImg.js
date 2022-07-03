import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import LightBox from './LightBox';
const CategorySingleImg = ({ url, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const handleClose = () => {
        console.log('knonck');
        setIsOpen(false)
    }
    const pop = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,

            transition: { delay: index * .5 }
        }
    }
    return (
        <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className='pb-4 grid-item overflow-hidden'>
            <div className='overflow-hidden'>

                <Image onClick={() => setIsOpen(true)} className='w-full singleImg' priority layout='raw' src={url} height={200} width={200} alt='photo'></Image>
            </div>
            <LightBox
                url={url}
                isVisible={isOpen}
                onClose={handleClose}
            />
        </motion.div>
    );
};


export default CategorySingleImg;