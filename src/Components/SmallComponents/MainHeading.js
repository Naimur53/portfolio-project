import React from 'react';
import { motion } from 'framer-motion'
const MainHeading = ({ title }) => {
    return (
        <div className='  overflow-hidden'>
            <motion.h2
                initial={{
                    y: "200%",
                    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
                }}
                animate={{
                    y: 0,
                    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
                }}
                className=' font-family-Helvetica'>{title}</motion.h2>
        </div >
    );
};

export default MainHeading;