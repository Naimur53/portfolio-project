import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CheckBanner = () => {
    const [letter, setLetter] = useState("J");
    const [i, setI] = useState(0);
    useEffect(() => {

    }, [])
    const letters = 'JOHN'
    setTimeout(() => {
        setLetter(letters[i]);
        if (i === 3) {
            setI(0)
        } else {
            setI(i + 1)
        }
    }, 2000)

    const initial = {
        opacity: 0,
        scale: 0.8,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .75 }
    }
    const animate = {
        opacity: 1,
        scale: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .75 }
    }
    return (
        <motion.div animate={animate} initial={initial} exit={{ opacity: 0 }} className='flex justify-center h-full align-center'>
            <span className='letter select-none opacity-animation' style={{ lineHeight: '1', fontSize: '600px', fontWeight: 'bold' }}>{letter}</span>
        </motion.div>
    );
};

export default CheckBanner;