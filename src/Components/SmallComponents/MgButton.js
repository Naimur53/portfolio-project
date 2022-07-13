import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
const MgButton = ({ text, buttonProps }) => {
    const container = useRef()
    const [mp, setMp] = useState({ x: 0, y: 0 })
    const handleMouseMove = (e) => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        let y = e.clientY - container.current.getBoundingClientRect().top
        setMp({ x: (x / 5) - 12, y: (y / 3) - 10 });

        // canvasRef.current.style.transform = `translate3d(-${x / 1.5}px,-${y * 2}px,0px) scaleX(1) `;
        // 
        e.stopPropagation();


    }
    const handleMouseLeave = () => {
        setMp({ x: 0, y: 0 })
    }
    const main = {
        initial: {
            x: 0
        },
        animate: {
            x: mp.x,
            y: mp.y,
            transition: { type: 'spring', }
        }
    }
    const word = {
        initial: {
            x: 0
        },
        animate: {
            x: mp.x,
            y: mp.y,
            transition: { type: 'spring' }
        }
    }
    return (
        <motion.div
            initial="initial"
            animate='animate'
            className='cursor-pointer '
            ref={container}
            variants={main}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className='p-2 md:p-4  mgbutton-bg text-black capitalize rounded-full md:px-10 px-5'>

                <motion.button {...buttonProps} variants={word} >{text}</motion.button>
            </div>
        </motion.div>
    );
};

export default MgButton;